import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TitleImg from '../assets/images/Title/Title.png';
import GameStart from '../assets/images/Title/gamestart_button.png';
import Background from './background';
import { defaultInstance } from '../apis/utils';
import { useEffect } from 'react';

const Title = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getAccessToken = async (code: string) => {
      try {
        // GET 요청을 통해 인증 코드를 백엔드에 전달
        console.log('getAccessToken');
        const response = await defaultInstance.get(`/auth/callback?code=${code}`);
        const accessToken = response.data.accessToken;
        console.log(response);
        console.log(accessToken);

        // 받아온 액세스 토큰을 사용하여 추가 작업 수행
        // 예: 사용자 정보 요청, 로그인 처리 등
      } catch (error) {
        console.error('Access token error:', error);
      }
    };

    // URL에서 인증 코드 추출
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    // 인증 코드가 존재하면 액세스 토큰 요청
    if (code) {
      getAccessToken(code);
    }
  }, []);

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
