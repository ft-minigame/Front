import styled from 'styled-components';
import Frame from '../../assets/images/Frame.png';
import { defaultInstance } from '../apis/utils';

const Login = () => {
  const handleLogin = async () => {
    window.location.href =
      'https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-38550761e834c25fce3bd7272f71cdab32f65acead8e2d2373a7770fdeb05175&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&response_type=code';
  };

  return (
    <Wrapper>
      <BackImage />
      <LoginButton onClick={handleLogin}>Login</LoginButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 1200px;
  min-height: 675px;
`;

const BackImage = styled.div`
  position: relative;
  width: 1200px;
  height: 675px;
  background: url(${Frame});
  background-repeat: no-repeat;
  background-size: cover;
`;

const LoginButton = styled.button`
  cursor: pointer; // 커서 올리면 손바닥
  position: absolute;
  background-color: transparent;
  border: none;
  border: 1px solid #2e3a51;
  background-color: #2e3a51;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;

  &:hover {
    background-color: #fff;
    color: #2e3a51;
  }

  &:active {
    background-color: #2e3a51;
    color: #fff;
  }
`;
