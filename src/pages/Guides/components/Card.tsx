import { Fragment } from 'react';

import styled from 'styled-components';

const CardBase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 33.3%;

  .question {
    font-size: 2.5rem;
  }

  .question::before {
    content: '○';
    margin-right: 1rem;
  }

  .imageArea {
    display: flex;
    gap: 1.5rem;
    min-height: 50%;
    margin-left: 2.75rem;

    img {
      width: 14rem;
      height: 11.25rem;
    }
  }

  .answer {
    font-size: 1.5rem;
    margin-left: 2.75rem;
  }
`;

interface Props {
  question: string;
  answer: string;
  imageSrc: string[];
}

const Card = ({ answer, imageSrc, question }: Props) => {
  return (
    <CardBase>
      <p className="question">{question}</p>
      {!!imageSrc.length && (
        <div className="imageArea">
          {imageSrc.map((src, index) => (
            <img key={index} src={src} alt="guide image" />
          ))}
        </div>
      )}
      <p className="answer">
        {answer.split('\n').map((char, index) => (
          <Fragment key={index}>
            {char}
            <br />
          </Fragment>
        ))}
      </p>
    </CardBase>
  );
};

export default Card;
