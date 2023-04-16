import styled from 'styled-components';
import Background from '../background';
import SelectTitle from '../../assets/images/Index/game_select.png';
import { GameSelectButton } from './GameSelectButton';
import { MoaMoa, MoaMoaThumbnail, Ready, ReadyThumbnail } from '../../assets/images/GameSelect';

export const GameSelect = () => {
  return (
    <Wrapper>
      <Background />
      <BackImage />
      <ButtonWrapper>
        <GameSelectButton defaultThumbnail={MoaMoaThumbnail} src={MoaMoa} />
        <GameSelectButton defaultThumbnail={ReadyThumbnail} src={Ready} />
        <GameSelectButton defaultThumbnail={ReadyThumbnail} src={Ready} />
      </ButtonWrapper>
    </Wrapper>
  );
};

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
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BackImage = styled.div`
  position: absolute;
  width: 338px;
  height: 80px;
  margin-bottom: 350px;
  background: url(${SelectTitle});
  background-repeat: no-repeat;
  background-size: cover;
`;
