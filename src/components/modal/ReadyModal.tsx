import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import readyImg from '../../assets/images/Modal/ready/ready.png';
import startImg from '../../assets/images/Modal/ready/start.png';
import { ReadyModalType } from '../../types/ReadyModalType';

const ReadyModal = ({ ready }: ReadyModalType) => {
  const [showStart, setShowStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStart(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Wrapper>
      <ImgTag src={showStart ? startImg : readyImg} />
    </Wrapper>
  );
};

export default ReadyModal;

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 250px;
  border: none;
  padding: 20px;
  z-index: 999;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ImgTag = styled.img`
  position: absolute;
  width: 350px;
  height: 250px;
  object-fit: cover;
`;
