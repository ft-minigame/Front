import styled from 'styled-components';
import { useState } from 'react';
import rank1 from '../../assets/images/Index/rank.png';
import rank2 from '../../assets/images/Index/rank_.png';

const SelectButton2 = () => {
  const [rank, setImageSrc] = useState(rank2);

  function handleMouseOver() {
    setImageSrc(rank1);
  }

  function handleMouseLeave() {
    setImageSrc(rank2);
  }

  return (
    <Button onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <ButtonImg src={rank} />
    </Button>
  );
};

export default SelectButton2;

const Button = styled.button`
  cursor: pointer; // 커서 올리면 손바닥
  // position : absolute;
  background-color: transparent;
  border: none;
`;
const ButtonImg = styled.img`
  &:hover {
    // 커서 올리면 이미지 커지게
    // transform: scale(1.3);
  }
  width: 338px;
  height: 80px;
`;
