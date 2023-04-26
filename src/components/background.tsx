import styled from 'styled-components';
import Frame from '../assets/images/Frame.png';
import React from 'react';

const Background = () => {
  return (
    <Wrapper>
      <BackImage />
    </Wrapper>
  );
};

export default Background;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 1200px;
  min-height: 675px;
`;

const BackImage = styled.div`
  position: relative;
  width: 1200px;
  height: 675px;
  background: url(${Frame});
  background-repeat: no-repeat;
  background-size: cover;
`;
