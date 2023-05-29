import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import gameoverImg from '../../assets/images/Modal/gameover/gameover.png';
import restartImg from '../../assets/images/Modal/pause/restart.png';
import menuImg from '../../assets/images/Modal/pause/menu.png';
import { PauseModalType } from '../../types/PauseModalType';

function GameoverModal({ restart }: PauseModalType) {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/index');
  };

  return (
    <Wrapper>
      <PauseImgTag src={gameoverImg} />
      <ButtonWrapper>
        <Button onClick={restart}>
          <ButtonImg src={restartImg} />
        </Button>
        <Button onClick={handleMenuClick}>
          <ButtonImg src={menuImg} />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default GameoverModal;

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 250px;
  border: none;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PauseImgTag = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 170px;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin: 0 10px;
`;

const ButtonImg = styled.img`
  width: 90px;
  height: 36px;
`;
