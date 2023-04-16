import styled from 'styled-components';
import Background from '../background';
import Button1 from './selectButton1';
import Button2 from './selectButton2';
import Button3 from './selectButton3';
import Button4 from './selectButton4';
import Button5 from './selectButton5';

const Index = () => {
  return (
    <Wrapper>
      <Background />
      <ButtonWrapper>
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Index;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 1200px;
  min-height: 675px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
