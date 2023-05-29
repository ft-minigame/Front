import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import pauseImg from '../../assets/images/Modal/pause/pause.png';
import restartImg from '../../assets/images/Modal/pause/restart.png';
import menuImg from '../../assets/images/Modal/pause/menu.png';
import { PauseModalType } from '../../types/PauseModalType';

function PauseModal({ restart }: PauseModalType) {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/index');
  };

  return (
    <Wrapper>
      <PauseImgTag src={pauseImg} />
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

export default PauseModal;

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 250px;
  border: none;
  padding: 20px;
  z-index: 999;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PauseImgTag = styled.img`
  position: absolute;
  width: 350px;
  height: 250px;
  object-fit: cover;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  top: 90px;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  z-index: 1;
  padding-right: 30px;
  padding-left: 30px;
`;

const ButtonImg = styled.img`
  width: 90px;
  height: 36px;
`;
