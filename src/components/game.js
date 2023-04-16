import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Background from './background';
import back from '../assets/images/character/back.png';
import front from '../assets/images/character/front.png';
import left from '../assets/images/character/left.png';
import right from '../assets/images/character/right.png';

const Game = () => {
  const containerWidth = 1100;
  const containerHeight = 650;
  const start = {
    x: window.innerWidth / 2 + 100,
    y: window.innerHeight / 2 + 50,
  };

  const [position, setPosition] = useState(start);
  const [prevPosition, setPrevPosition] = useState(start);
  const [image, setImage] = useState(back);

  useEffect(() => {
    function handleKeyDown(event) {
      const { key } = event;
      switch (key) {
        case 'ArrowUp':
          setPrevPosition(position);
          setPosition((pos) => ({
            ...pos,
            y: Math.max(pos.y - 10, -pos.y + containerHeight / 2, 0),
          }));
          setImage(back);
          break;
        case 'ArrowDown':
          setPrevPosition(position);
          setPosition((pos) => ({
            ...pos,
            y: Math.min(
              pos.y + 10,
              containerHeight / 2 - 100 + pos.y,
              containerHeight - 100,
            ),
          }));
          setImage(front);
          break;
        case 'ArrowLeft':
          setPrevPosition(position);
          setPosition((pos) => ({
            ...pos,
            x: Math.max(pos.x - 10, -pos.x + containerWidth / 2, 0),
          }));
          setImage(left);
          break;
        case 'ArrowRight':
          setPrevPosition(position);
          setPosition((pos) => ({
            ...pos,
            x: Math.min(
              pos.x + 10,
              containerWidth / 2 - 100 + pos.x,
              containerWidth - 100,
            ),
          }));
          setImage(right);
          break;
        default:
          break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [position]);

  return (
    <Wrapper>
      <Background />
      <CatImg src={image} position={position} prevPosition={prevPosition} />
    </Wrapper>
  );
};

export default Game;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 1200px;
  min-height: 675px;
  position: relative;
`;

const CatImg = styled.img`
  position: absolute;
  left: ${(props) => props.prevPosition.x}px;
  top: ${(props) => props.prevPosition.y}px;
  transition: left 0.1s, top 0.1s;
  width: 100px;
  height: 100px;
`;
