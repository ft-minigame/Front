import styled from "styled-components";
import React, { useState } from 'react';
import cat1 from '../../assets/images/Index/cat.png'
import cat2 from '../../assets/images/Index/cat_.png'

const SelectButton2 = () => {
    
    const [cat, setImageSrc] = useState(cat2);

    function handleMouseOver() {
        setImageSrc(cat1);
    }

    function handleMouseLeave() {
        setImageSrc(cat2);
    }

    return (
        <Button onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} >
            <ButtonImg src={cat} />
        </Button>
    );
}

export default SelectButton2;

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
    width: 431px;
    height: 80px;
`;