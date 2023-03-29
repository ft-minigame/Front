import styled from "styled-components";
import Background from "./background/background";
import Title from '../assets/images/Title.gif';
import GameStart from '../assets/images/gamestart_button.png'

const Start = () => {
    return (
        <Wrapper>
            <Background />
            <TitleImg src={Title} />
            <Button> <ButtonImg src={GameStart} /> </Button>
        </Wrapper>
    );
}

export default Start;

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TitleImg = styled.img`
    position : absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const Button = styled.button`
    position : absolute;
    margin-top : 450px;
    position : absolute;
    background-color:transparent;
    border:none;
`
const ButtonImg = styled.img`
    width: 120px;
    height: 40px;
`;