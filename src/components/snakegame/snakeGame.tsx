import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Background from '../background';
import back from '../../assets/images/character/back.png';
import front from '../../assets/images/character/front.png';
import left from '../../assets/images/character/left.png';
import right from '../../assets/images/character/right.png';
import GFrame from '../../assets/images/SnakeGame/Grid_Frame.png'
import itemImage from '../../assets/images/SnakeGame/item.png';
import ShowScore from './ShowScore';
import KeyPressHandle from './KeyPressHandle';
import Modal from '../modal/modal';
import { SnakeGameType } from '../../types/SnakeGameType';
import React from 'react';
import { setFips } from 'crypto';

const GAME_WIDTH = 680;
const GAME_HEIGHT = 440;
const CHARACTER_SIZE = 40;

const Game = () => {
  const [snake, setSnake] = useState<SnakeGameType[]>([{ x: 8, y: 5, image: back }]);
  const [direction, setDirection] = useState('back');
  const [gameOver, setGameOver] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pause, setPause] = useState(false);
  const [item, setItem] = useState({ x: 0, y: 0, visible: false });
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!pause) {
        moveSnake();
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [snake, pause]);

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
        head.image = back;
        break;
      case 'down':
        head.y += 1;
        head.image = front;
        break;
      case 'left':
        head.x -= 1;
        head.image = left;
        break;
      case 'right':
        head.x += 1;
        head.image = right;
        break;
      default:
        break;
    }
  
    if (head.x < 0 || head.x * CHARACTER_SIZE >= GAME_WIDTH || head.y < 0 || head.y * CHARACTER_SIZE >= GAME_HEIGHT) {
      setGameOver(true);
      return;
    }
  
    const newSnake = [head, ...snake.slice(0, -1)];
    if (newSnake.length > 1 && newSnake.slice(1).some(block => block.x === head.x && block.y === head.y)) {
      setGameOver(true);
      return;
    }
    setSnake(newSnake);
  
    if (item.visible && item.x === head.x && item.y === head.y) {
      const newItem = {
        x: Math.floor(Math.random() * (GAME_WIDTH / CHARACTER_SIZE)),
        y: Math.floor(Math.random() * (GAME_HEIGHT / CHARACTER_SIZE)),
        visible: true
      };
      setItem(newItem);
      setSnake([...newSnake, snake[snake.length - 1]]);
      setScore(score + 1);
    }
  
    if (!item.visible) {
      showItem();
    }
  };
  
  const handleKeyDown = (event : React.KeyboardEvent<HTMLDivElement>) => {
    const newDirection = KeyPressHandle({ event, direction, gameOver });
    if (newDirection) setDirection(newDirection);
    if (newDirection === 'modal'){
      setShowModal(true);
      setPause(true);
    } else if (newDirection === 'close'){
      setShowModal(false);
      setPause(false);
    }
  };

  return (
    <Wrapper onKeyDown={handleKeyDown} tabIndex={0}>
      <Background />
      <GameFrame />
      <Canvas>
        {snake.map((block, index) => (
          <SnakeBlock src={block.image} key={index} style={{ left: block.x * CHARACTER_SIZE, top: block.y * CHARACTER_SIZE }} />
        ))}
        {item.visible && <SnakeBlock src={itemImage} style={{ left: item.x * CHARACTER_SIZE, top: item.y * CHARACTER_SIZE }} />}
        <ShowScore snake={snake} score={score} restProps={undefined} />
      </Canvas>
      {gameOver && <GameOver>Game Over!</GameOver>}
      {showModal && <Modal />}
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
