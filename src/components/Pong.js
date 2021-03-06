import { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import SocketEvent from '../constants/socket';
import {
  playExtinctionSound,
  playWallHitSound,
  playPaddleHitSound,
} from '../utils/playSound';
import {
  enterControllerGamePage,
  sendGuestLoseVibration,
  sendGuestPaddleVibration,
  sendGuestWin,
  sendGuestWinVibration,
  sendHostIsInFocus,
  sendHostIsNotInFocus,
  sendHostLoseVibration,
  sendHostPaddleVibration,
  sendHostWin,
  sendHostWinVibration,
  sendResizeEvent,
  sendSyncGame,
  socket,
} from '../utils/socketAPI';

const Pong = ({ roomData, setting, isUserHost }) => {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const width = Math.floor(roomData.width / 10) * 10;
  const height = Math.floor(roomData.height / 10) * 10;
  const isFrameMoving = useRef(true);
  const isScoreChanged = useRef(false);
  const isBallMoving = useRef(true);
  const IsHostInFocus = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio ?? 1;
    let requestId = 0;

    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;

    context.fillStyle = '#00ff2b';
    context.strokeStyle = '#00ff2b';
    context.font = 'normal normal 150px DungGeunMo';

    const getPaddleLength = (isNormalMode, canvasHeight) => {
      if (isNormalMode) {
        return canvasHeight / 5;
      } else {
        return canvasHeight / 8;
      }
    };

    const getDeltaValue = (isNormalMode, canvasConstant) => {
      if (isNormalMode) {
        return canvasConstant * 0.002;
      } else {
        return canvasConstant * 0.005;
      }
    };

    const getTargetScore = (isNormalTargetScore) => {
      if (isNormalTargetScore) {
        return 11;
      } else {
        return 21;
      }
    };

    let hostScore = 0;
    let guestScore = 0;

    const getHostScore = () => {
      return hostScore;
    };

    const getGuestScore = () => {
      return guestScore;
    };

    const plusOneHostScore = () => {
      hostScore += 1;
    };

    const plusOneGuestScore = () => {
      guestScore += 1;
    };

    const ballLength = canvas.width * 0.015;
    let ballCenterX = canvas.width / 2;
    let ballCenterY = canvas.height / 2;
    let ballDeltaX = getDeltaValue(roomData.isNormalMode, canvas.width);
    let ballDeltaY = getDeltaValue(roomData.isNormalMode, canvas.height);
    let changeAcceleration = true;
    let collisonLocation = '';

    const paddleLength = getPaddleLength(roomData.isNormalMode, canvas.height);
    const paddleWidth = canvas.width * 0.015;
    let hostPaddleVerticalStartpoint = 0;
    let guestPaddleVerticalStartpoint = 0;

    const resumeGame = (winner) => {
      sendSyncGame({
        gameId: roomData.gameId,
        isUserHost,
        gameData: {
          hostScore,
          guestScore,
          winner,
          random:
            (Math.random() + 1) * ((hostScore + guestScore) % 2 === 0 ? 1 : -1),
        },
      });
    };

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.moveTo(canvas.width / 2, 0);
      context.lineTo(canvas.width / 2, canvas.height);
      context.setLineDash([20, 10]);
      context.lineWidth = 10;
      context.stroke();
      context.closePath();

      context.fillText(getHostScore(), canvas.width / 4, canvas.height / 5);

      context.fillText(
        getGuestScore(),
        canvas.width - canvas.width / 3,
        canvas.height / 5,
      );

      if (getHostScore() >= getTargetScore(roomData.isNormalTargetScore)) {
        isFrameMoving.current = false;

        sendHostWin(roomData.gameId);
      }

      if (getGuestScore() >= getTargetScore(roomData.isNormalTargetScore)) {
        isFrameMoving.current = false;

        sendGuestWin(roomData.gameId);
      }

      if (changeAcceleration && parseInt(ballDeltaX) >= 20) {
        changeAcceleration = false;
      }

      const ballTop = ballCenterY - ballLength / 2;
      const ballBottom = ballCenterY + ballLength / 2;
      const ballLeft = ballCenterX - ballLength / 2;
      const ballRight = ballCenterX + ballLength / 2;

      context.fillRect(
        canvas.width / 20,
        hostPaddleVerticalStartpoint,
        paddleWidth,
        paddleLength,
      );

      context.fillRect(
        canvas.width - canvas.width / 20 - paddleWidth,
        guestPaddleVerticalStartpoint,
        paddleWidth,
        paddleLength,
      );

      context.fillRect(ballLeft, ballTop, ballLength, ballLength);

      if (ballTop <= 0) {
        ballDeltaY *= -1;
        collisonLocation = 'top';

        if (changeAcceleration) {
          ballDeltaX *= 1.05;
          ballDeltaY *= 1.05;
        }

        setting.isPlayingSFX && playWallHitSound();
      }

      if (ballBottom >= canvas.height) {
        ballDeltaY *= -1;
        collisonLocation = 'bottom';

        if (changeAcceleration) {
          ballDeltaX *= 1.05;
          ballDeltaY *= 1.05;
        }

        setting.isPlayingSFX && playWallHitSound();
      }

      if (ballLeft <= 0 && !isScoreChanged.current) {
        plusOneGuestScore();
        isScoreChanged.current = true;
        isBallMoving.current = false;
        collisonLocation = '';

        setting.isVibrationMode && sendGuestWinVibration(roomData.gameId);
        setting.isVibrationMode && sendHostLoseVibration(roomData.gameId);
        setting.isPlayingSFX && playExtinctionSound();

        resumeGame('guest');
      }

      if (ballRight >= canvas.width && !isScoreChanged.current) {
        plusOneHostScore();
        isScoreChanged.current = true;
        isBallMoving.current = false;
        collisonLocation = '';

        setting.isVibrationMode && sendGuestLoseVibration(roomData.gameId);
        setting.isVibrationMode && sendHostWinVibration(roomData.gameId);
        setting.isPlayingSFX && playExtinctionSound();

        resumeGame('host');
      }

      if (
        canvas.width / 20 < ballRight &&
        canvas.width / 20 + paddleWidth >= ballLeft &&
        hostPaddleVerticalStartpoint < ballBottom &&
        hostPaddleVerticalStartpoint + paddleLength > ballTop &&
        collisonLocation !== 'host'
      ) {
        ballDeltaX *= -1;
        collisonLocation = 'host';

        setting.isVibrationMode && sendHostPaddleVibration(roomData.gameId);
        setting.isPlayingSFX && playPaddleHitSound();
      }

      if (
        canvas.width - canvas.width / 20 > ballLeft &&
        canvas.width - canvas.width / 20 - paddleWidth <= ballRight &&
        guestPaddleVerticalStartpoint < ballBottom &&
        guestPaddleVerticalStartpoint + paddleLength > ballTop &&
        collisonLocation !== 'guest'
      ) {
        ballDeltaX *= -1;
        collisonLocation = 'guest';

        setting.isVibrationMode && sendGuestPaddleVibration(roomData.gameId);
        setting.isPlayingSFX && playPaddleHitSound();
      }

      if (isBallMoving.current) {
        ballCenterX += ballDeltaX;
        ballCenterY += ballDeltaY;
      }

      if (isFrameMoving.current) {
        requestId = requestAnimationFrame(render);
      }
    };

    render();

    const getPaddleVerticalEndpoint = (
      startVerticalPoint,
      upperLimit,
      lowerLimit,
      length,
      canvasHeight,
    ) => {
      return (
        ((canvasHeight - length) / (lowerLimit - upperLimit)) *
          startVerticalPoint -
        ((canvasHeight - length) * upperLimit) / (lowerLimit - upperLimit)
      );
    };

    const handlePaddleMove = (data) => {
      const paddleVerticalStartpoint = getPaddleVerticalEndpoint(
        data.beta,
        data.rightAngle,
        data.leftAngle,
        paddleLength,
        canvas.height,
      );

      if (data.userId === roomData.hostId) {
        if (
          paddleVerticalStartpoint + paddleLength <= canvas.height &&
          paddleVerticalStartpoint >= 0
        ) {
          hostPaddleVerticalStartpoint = paddleVerticalStartpoint;
        } else if (paddleVerticalStartpoint + paddleLength > canvas.height) {
          hostPaddleVerticalStartpoint = canvas.height - paddleLength;
        } else if (paddleVerticalStartpoint < 0) {
          hostPaddleVerticalStartpoint = 0;
        }
      } else {
        if (
          paddleVerticalStartpoint + paddleLength <= canvas.height &&
          paddleVerticalStartpoint >= 0
        ) {
          guestPaddleVerticalStartpoint = paddleVerticalStartpoint;
        } else if (paddleVerticalStartpoint + paddleLength > canvas.height) {
          guestPaddleVerticalStartpoint = canvas.height - paddleLength;
        } else if (paddleVerticalStartpoint < 0) {
          guestPaddleVerticalStartpoint = 0;
        }
      }
    };

    const handleResize = () => {
      sendResizeEvent(roomData.gameId);
      window.removeEventListener('resize', handleResize);
    };

    const handleFocus = () => {
      if (isUserHost) {
        IsHostInFocus.current = true;
      }
    };

    const handleBlur = () => {
      if (isUserHost) {
        IsHostInFocus.current = false;
        sendHostIsNotInFocus(roomData.gameId);
      }
    };

    const handleSyncGameData = (data) => {
      if (data.gameData.winner === 'host') {
        ballDeltaX = getDeltaValue(roomData.isNormalMode, canvas.width);
        ballDeltaY =
          getDeltaValue(roomData.isNormalMode, canvas.height) *
          data.gameData.random;
      } else if (data.gameData.winner === 'guest') {
        ballDeltaX = getDeltaValue(roomData.isNormalMode, canvas.width) * -1;
        ballDeltaY =
          getDeltaValue(roomData.isNormalMode, canvas.height) *
          data.gameData.random;
      }

      ballCenterX = canvas.width / 2;
      ballCenterY = canvas.height / 2;

      hostScore = data.gameData.hostScore;
      guestScore = data.gameData.guestScore;

      isScoreChanged.current = false;
      isBallMoving.current = true;

      if (isUserHost && IsHostInFocus.current && !data.isHostInFocus) {
        sendHostIsInFocus(roomData.gameId);
      }
    };

    enterControllerGamePage();

    socket.on(SocketEvent.RECEIVE_BETA, handlePaddleMove);
    socket.on(SocketEvent.RECEIVE_SYNC_GAME, handleSyncGameData);

    window.addEventListener('resize', handleResize);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    return () => {
      socket.off(SocketEvent.RECEIVE_BETA, handlePaddleMove);
      socket.off(SocketEvent.RECEIVE_SYNC_GAME, handleSyncGameData);

      window.removeEventListener('resize', handleResize);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);

      cancelAnimationFrame(requestId);
    };
  }, [
    roomData.hostId,
    roomData.isNormalMode,
    roomData.isNormalTargetScore,
    roomData.gameId,
    width,
    height,
    setting.isVibrationMode,
    setting.isPlayingSFX,
    isUserHost,
  ]);

  return (
    <CanvasWrap ref={wrapRef}>
      <canvas ref={canvasRef}></canvas>
    </CanvasWrap>
  );
};

const CanvasWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  canvas {
    border: 1px solid #00ff2b;
  }
`;

Pong.propTypes = {
  roomData: PropTypes.object.isRequired,
  setting: PropTypes.object.isRequired,
  isUserHost: PropTypes.bool.isRequired,
};

export default Pong;
