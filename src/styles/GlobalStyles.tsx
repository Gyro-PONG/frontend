import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
 */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    padding: 0;
    margin: 0;
  }
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  /* font */
  @font-face {
    font-family: 'NeoDunggeunmo';
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/neodgm/NeoDunggeunmo.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/neodgm/NeoDunggeunmo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  body {
    background-color: black;
    color: ${({ theme }) => theme.colors.green};
    font-family: 'NeoDunggeunmo';
    user-select: none;
    overflow: hidden;
  }

  @media screen and (orientation: portrait) {
    .mobile:not(:has(div.motionButtonArea)) {
      &::before {
        content: '가로모드로 전환해주세요';
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.black};
        z-index: 999;
        user-select: none;
      }
    }
  }

  @media all and (max-width: 1280px), (max-height: 800px) {
    .pc {
      &::before {
        content: '더 넓은 사이즈의 화면에서 이용해주세요.';
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100%;
        font-size: 2rem;
        background-color: ${({ theme }) => theme.colors.black};
        z-index: 999;
        user-select: none;
      }
    }
  }
`;

export default GlobalStyles;
