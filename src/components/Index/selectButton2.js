import styled from "styled-components";
import React, { useState } from 'react';
import inquiry1 from '../../assets/images/Index/inquiry.png'
import inquiry2 from '../../assets/images/Index/inquiry_.png'

const SelectButton2 = () => {
    
    const [inquiry, setImageSrc] = useState(inquiry2);

    function handleMouseOver() {
        setImageSrc(inquiry1);
    }

    function handleMouseLeave() {
        setImageSrc(inquiry2);
    }

    return (
        <Button onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} >
            <ButtonImg src={inquiry} />
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
    width: 338px;
    height: 80px;
`;