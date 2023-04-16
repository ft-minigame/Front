import { useState } from 'react';

export const useHoverImage = (defaultThumbnail, src) => {
  const [image, setImage] = useState(defaultThumbnail);

  function handleMouseOver() {
    setImage(src);
  }

  function handleMouseLeave() {
    setImage(defaultThumbnail);
  }

  return {
    onMouseOver: handleMouseOver,
    onMouseLeave: handleMouseLeave,
    src: image,
  };
};
