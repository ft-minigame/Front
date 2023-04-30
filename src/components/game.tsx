import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Background from './background';
import back from '../assets/images/character/back.png';
import front from '../assets/images/character/front.png';
import left from '../assets/images/character/left.png';
import right from '../assets/images/character/right.png';
import GFrame from '../assets/images/SnakeGame/Grid_Frame.png'
import itemImage from '../assets/images/SnakeGame/item.png';
import React from 'react';

const GAME_WIDTH = 680;
const GAME_HEIGHT = 440;
const CHARACTER_SIZE = 40;

const Game = () => {
  const [snake, setSnake] = useState([{ x: 8, y: 5 }]);
  const [direction, setDirection] = useState('back');
  const [gameOver, setGameOver] = useState(false);
  const [image, setImage] = useState(back);
  const [item, setItem] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    const intervalId = setInterval(() => {
      moveSnake();
    }, 100);

    return () => clearInterval(intervalId);
  }, [snake]);

  const showItem = () => {
    const newItem = {
      x: Math.floor(Math.random() * (GAME_WIDTH / CHARACTER_SIZE)),
      y: Math.floor(Math.random() * (GAME_HEIGHT / CHARACTER_SIZE)),
      visible: true
    };
    setItem(newItem);
  };

  const moveSnake = () => {
    const head = { ...snake[0] };
    switch (direction) {
      case 'up':
        head.y -= 1;
        break;
      case 'down':
        head.y += 1;
        break;
      case 'left':
        head.x -= 1;
        break;
      case 'right':
        head.x += 1;
        break;
      default:
        break;
    }  
  
    if (head.x < 0 || head.x * CHARACTER_SIZE >= GAME_WIDTH || head.y < 0 || head.y * CHARACTER_SIZE >= GAME_HEIGHT) {
      setGameOver(true);
      return;
    }
  
    const newSnake = [head, ...snake.slice(0, -1)];
    setSnake(newSnake);
  
    if (item.visible && item.x === head.x && item.y === head.y) {
      const newItem = {
        x: Math.floor(Math.random() * (GAME_WIDTH / CHARACTER_SIZE)),
        y: Math.floor(Math.random() * (GAME_HEIGHT / CHARACTER_SIZE)),
        visible: true
      };
      setItem(newItem);
      setSnake([...newSnake, snake[snake.length - 1]]);
    }
  
    if (!item.visible) {
      showItem();
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!gameOver) {
      switch (event.key) {
        case 'ArrowUp':
          if (direction !== 'down') {
            setDirection('up');
            setImage(back);
          }
          break;
        case 'ArrowDown':
          if (direction !== 'up') {
            setDirection('down');
            setImage(front);
          }
          break;
        case 'ArrowLeft':
          if (direction !== 'right') {
            setDirection('left');
            setImage(left);
          }
          break;
        case 'ArrowRight':
          if (direction !== 'left') {
            setDirection('right');
            setImage(right);
          }
          break;
        default:
          break;
      }
    }
  };

  return (
    <Wrapper onKeyDown={handleKeyPress} tabIndex={0}>
      <Background />
      <GameFrame />
      <Canvas>
      {snake.map((block, index) => (
        <SnakeBlock src={image} key={index} style={{ left: block.x * CHARACTER_SIZE, top: block.y * CHARACTER_SIZE }} />
      ))}
      {item.visible && <SnakeBlock src={itemImage} style={{ left: item.x * CHARACTER_SIZE, top: item.y * CHARACTER_SIZE }} />}
    </Canvas>
      {gameOver && <GameOver>Game Over!</GameOver>}
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
`;

const GameFrame = styled.div`
  width: 700px;
  height: 460px;
  background: url(${GFrame});
  position: absolute;
`;

const Canvas = styled.div`
  width: ${GAME_WIDTH}px;
  height: ${GAME_HEIGHT}px;
  position: absolute;
`;

const SnakeBlock = styled.img`
  position: absolute;
  width: ${CHARACTER_SIZE}px;
  height: ${CHARACTER_SIZE}px;
`;

const GameOver = styled.div`
  position: absolute;
  font-size: 2rem;
  color: red;
  text-align: center;
`;
