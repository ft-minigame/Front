import styled from "styled-components";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GameSelect1 from '../../assets/images/Index/game_select.png'
import GameSelect2 from '../../assets/images/Index/game_select_.png'

const SelectButton1 = () => {
    
    const [GameSelect, setImageSrc] = useState(GameSelect2);

    function handleMouseOver() {
        setImageSrc(GameSelect1);
    }

    function handleMouseLeave() {
        setImageSrc(GameSelect2);
    }

    const navigate = useNavigate(); 
    
    const handleClick = () => {
        navigate('/gameselect');
    };

    return (
        <Button onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} onClick={handleClick} >
            <ButtonImg src={GameSelect} />
        </Button>
    );
}

export default SelectButton1;

const Button = styled.button`
    cursor:pointer; // 커서 올리면 손바닥
    // position : absolute;
    background-color:transparent;
    border:none;
`
const ButtonImg = styled.img`
    &:hover{ // 커서 올리면 이미지 커지게
        // transform: scale(1.3);
    }
    width: 338px;
    height: 80px;
`;