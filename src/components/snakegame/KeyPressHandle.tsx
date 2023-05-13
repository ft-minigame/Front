import {KeyPressHandleProps} from '../../types/KeyPressHandle';

const KeyPressHandle = ({event, direction, gameOver}: KeyPressHandleProps) => {
    if (!gameOver) {
      switch (event.key) {
        case 'ArrowUp':
          if (direction !== 'down') {
            return 'up';
          }
          break;
        case 'ArrowDown':
          if (direction !== 'up') {
            return 'down';
          }
          break;
        case 'ArrowLeft':
          if (direction !== 'right') {
            return 'left';
          }
          break;
        case 'ArrowRight':
          if (direction !== 'left') {
            return 'right';
          }
          break;
        case ' ':
          if (direction === 'modal') {
            return 'close';
          }
          return 'modal';
        default:
          return direction;
      }
    }
  };

  export default KeyPressHandle;