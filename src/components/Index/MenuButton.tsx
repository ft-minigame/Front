import styled from 'styled-components';
import { useHoverImage } from '../../hooks/useHoverImage';
import React from 'react';
import { MenuButtonProps } from '../../types/MenuButtonType';

export const MenuButton = ({
  defaultThumbnail,
  src: _src,
  onClick,
  ...restProps
}: MenuButtonProps) => {
  const { src, onMouseOver, onMouseLeave } = useHoverImage(defaultThumbnail, _src);

  return (
    <Button onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} onClick={onClick} {...restProps}>
      <ButtonImg src={src} />
    </Button>
  );
};

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
