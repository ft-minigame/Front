import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TitleImg from '../assets/images/Title/Title.png';
import GameStart from '../assets/images/Title/gamestart_button.png';
import Background from './background';

const Title = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/index');
  };

  return (
    <Wrapper>
      <Background />
      <TitleImgTag src={TitleImg} />
      <Button onClick={handleClick}>
        <ButtonImg src={GameStart} />
      </Button>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 1200px;
  min-height: 675px;
`;

const TitleImgTag = styled.img`
  position: absolute;
  width: 1200px;
  height: 675px;
  object-fit: cover;
`;

const Button = styled.button`
  cursor: pointer; // 커서 올리면 손바닥
  position: absolute;
  margin-top: 380px;
  position: absolute;
  background-color: transparent;
  border: none;
`;
const ButtonImg = styled.img`
  &:hover {
    // 커서 올리면 이미지 커지게
    transform: scale(1.3);
  }
  width: 120px;
  height: 40px;
`;
