import styled from 'styled-components';
import { useState } from 'react';
import setting1 from '../../assets/images/Index/setting.png';
import setting2 from '../../assets/images/Index/setting_.png';

const SelectButton2 = () => {
  const [setting, setImageSrc] = useState(setting2);

  function handleMouseOver() {
    setImageSrc(setting1);
  }

  function handleMouseLeave() {
    setImageSrc(setting2);
  }

  return (
    <Button onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <ButtonImg src={setting} />
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
