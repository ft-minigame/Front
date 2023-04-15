import styled from 'styled-components'
import React, { useState } from 'react'
import Game1 from '../../assets/images/GameSelect/game1.png'
import Game2 from '../../assets/images/GameSelect/game1_.png'

const SelectButton1 = () => {
  const [GameSelect, setImageSrc] = useState(Game1)

  function handleMouseOver() {
    setImageSrc(Game2)
  }

  function handleMouseLeave() {
    setImageSrc(Game1)
  }

  return (
    <Button onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <ButtonImg src={GameSelect} />
    </Button>
  )
}

export default SelectButton1

const Button = styled.button`
  cursor: pointer; // 커서 올리면 손바닥
  // position : absolute;
  background-color: transparent;
  border: none;
`
const ButtonImg = styled.img`
  &:hover {
    // 커서 올리면 이미지 커지게
    // transform: scale(1.3);
  }
  width: 200px;
  height: 286px;
`
