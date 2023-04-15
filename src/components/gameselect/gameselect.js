import styled from 'styled-components'
import Background from '../background'
import GameButton1 from './gameButton1'
import GameButton2 from './gameButton2'
import GameButton3 from './gameButton3'
import SelectTitle from '../../assets/images/Index/game_select.png'

const GameSelect = () => {
  return (
    <Wrapper>
      <Background />
      <BackImage />
      <ButtonWrapper>
        <GameButton1 />
        <GameButton2 />
        <GameButton3 />
      </ButtonWrapper>
    </Wrapper>
  )
}

export default GameSelect

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 1200px;
  min-height: 675px;
`

const ButtonWrapper = styled.div`
  position: absolute;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const BackImage = styled.div`
  position: absolute;
  width: 338px;
  height: 80px;
  margin-bottom: 350px;
  background: url(${SelectTitle});
  background-repeat: no-repeat;
  background-size: cover;
`
