import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import GFrame from '../../assets/images/SnakeGame/Grid_Frame.png';
import itemImage from '../../assets/images/SnakeGame/item.png';
import back from '../../assets/images/character/back.png';
import front from '../../assets/images/character/front.png';
import left from '../../assets/images/character/left.png';
import right from '../../assets/images/character/right.png';
import Background from '../background';
import KeyPressHandle from './KeyPressHandle';
import React from 'react';
import { SnakeGameType } from '../../types/SnakeGameType';
import PauseModal from '../modal/PauseModal';
import ReadyModal from '../modal/ReadyModal';
import GameoverModal from '../modal/gameoverModal';
import ScoreBoard from './ScoreBoard';

const GAME_WIDTH = 680;
const GAME_HEIGHT = 440;
const CHARACTER_SIZE = 40;

const Game = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [snake, setSnake] = useState<SnakeGameType[]>([{ x: 3, y: 3, image: right }]);
  const [direction, setDirection] = useState('right');
  const [tempDirec, setTempDirec] = useState('right');
  const [gameOver, setGameOver] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [ready, setReady] = useState(true);
  const [pause, setPause] = useState(false);
  const [item, setItem] = useState({ x: 0, y: 0, visible: false });
  const [score, setScore] = useState<number>(0);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (ready) {
        setTimeout(() => {
          setReady(false);
        }, 2000);
      } else if (!pause) {
        moveSnake();
      }

      inputRef.current?.focus();
    }, 100);

    return () => clearInterval(intervalId);
  }, [snake, pause, ready, inputRef]);

  const showItem = () => {
    const newItem = {
      x: Math.floor(Math.random() * (GAME_WIDTH / CHARACTER_SIZE)),
      y: Math.floor(Math.random() * (GAME_HEIGHT / CHARACTER_SIZE)),
      visible: true,
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

    if (
      head.x < 0 ||
      head.x * CHARACTER_SIZE >= GAME_WIDTH ||
      head.y < 0 ||
      head.y * CHARACTER_SIZE >= GAME_HEIGHT
    ) {
      setShowOverlay(true);
      setGameOver(true);
      return;
    }

    const newSnake = [head, ...snake.slice(0, -1)];
    if (
      newSnake.length > 1 &&
      newSnake.slice(1).some((block) => block.x === head.x && block.y === head.y)
    ) {
      setShowOverlay(true);
      setGameOver(true);
      return;
    }
    setSnake(newSnake);

    if (item.visible && item.x === head.x && item.y === head.y) {
      const newItem = {
        x: Math.floor(Math.random() * (GAME_WIDTH / CHARACTER_SIZE)),
        y: Math.floor(Math.random() * (GAME_HEIGHT / CHARACTER_SIZE)),
        visible: true,
      };
      setItem(newItem);
      setSnake([...newSnake, snake[snake.length - 1]]);
      setScore(score + 1);
    }

    if (!item.visible) {
      showItem();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (gameOver || ready) return;
    const newDirection = KeyPressHandle({ event, direction, gameOver });

    if (newDirection === 'modal') {
      setDirection(newDirection);
      setShowModal(true);
      setPause(true);
      setShowOverlay(true);
    } else if (newDirection === 'close') {
      setDirection(tempDirec);
      setShowModal(false);
      setReady(true);
      setPause(false);
      setShowOverlay(false);
    } else if (newDirection && !pause) {
      setDirection(newDirection);
      setTempDirec(newDirection);
    }
  };

  const restartGame = () => {
    setSnake([{ x: 3, y: 3, image: right }]);
    setDirection('right');
    setGameOver(false);
    setShowModal(false);
    setPause(false);
    setItem({ x: 0, y: 0, visible: false });
    setScore(0);
    setShowOverlay(false);
    setReady(true);
  };

  return (
    <Wrapper ref={inputRef} tabIndex={0} onKeyDown={handleKeyDown}>
      <Background />
      {showOverlay && <Overlay />}
      <GameFrame />
      <Canvas>
        {snake.map((block, index) => (
          <SnakeBlock
            src={block.image}
            key={index}
            style={{ left: block.x * CHARACTER_SIZE, top: block.y * CHARACTER_SIZE }}
          />
        ))}
        {item.visible && (
          <SnakeBlock
            src={itemImage}
            style={{ left: item.x * CHARACTER_SIZE, top: item.y * CHARACTER_SIZE }}
          />
        )}
        <ScoreBoard snake={snake} score={score} />
      </Canvas>
      {gameOver && <GameoverModal restart={restartGame} />}
      {showModal && <PauseModal restart={restartGame} />}
      {ready && <ReadyModal ready={ready} />}
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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Adjust the opacity as needed */
  z-index: 998; /* Make sure the overlay appears on top of other elements */
`;
