import styled from 'styled-components';
import { ScoreBoardProps } from '../../types/ScoreBoardProps';

const CHARACTER_SIZE = 40;

const ScoreBoard = ({ snake, score }: ScoreBoardProps) => {
  const digits = score.toString().split('');
  const scoreImages = digits.map((digit, index) => {
    const leftPos = CHARACTER_SIZE * 7 + CHARACTER_SIZE * index;
    const opacity = snake.some(
      (block) =>
        (block.x === index + 7 && block.y === 0) ||
        (block.x === index + 8 && block.y === 0) ||
        (block.x === index + 7 && block.y === 1) ||
        (block.x === index + 8 && block.y === 1),
    )
      ? 0.5
      : 1;
    return (
      <ScoreImg
        key={index}
        // FIXME: env type assertion
        // eslint-disable-next-line no-undef
        src={`${process.env.PUBLIC_URL}/assets/Number/${digit}.png`}
        alt={`digit-${digit}`}
        style={{ left: leftPos, opacity: opacity }}
      />
    );
  });
  return <div style={{ position: 'relative' }}>{scoreImages} </div>;
};

export default ScoreBoard;

const ScoreImg = styled.img`
  position: absolute;
  width: ${CHARACTER_SIZE * 2}px;
  height: ${CHARACTER_SIZE * 2}px;
`;
