import styled from 'styled-components';
import { useHoverImage } from '../../hooks/useHoverImage';

export const GameSelectButton = ({ defaultThumbnail, src: _src, ...restProps }) => {
  const { src, onMouseOver, onMouseLeave } = useHoverImage(defaultThumbnail, _src);

  return (
    <Button onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} {...restProps}>
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
  width: 200px;
  height: 286px;
`;
