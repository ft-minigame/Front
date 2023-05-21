import { KeyPressHandleProps } from '../../types/KeyPressHandle';

const KeyPressHandle = ({ event, direction, gameOver }: KeyPressHandleProps) => {
  switch (event.key) {
    case 'ArrowUp':
      return direction !== 'down' ? 'up' : null;
    case 'ArrowDown':
      return direction !== 'up' ? 'down' : null;
    case 'ArrowLeft':
      return direction !== 'right' ? 'left' : null;
    case 'ArrowRight':
      return direction !== 'left' ? 'right' : null;
    case ' ':
      return direction === 'modal' ? 'close' : 'modal';
    default:
      return null;
  }
};

export default KeyPressHandle;
