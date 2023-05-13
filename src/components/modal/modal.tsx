import React from 'react';
import styled from "styled-components";

function Modal() {
  return (
      <>
      {(
        <Wrapper>
            <br />
            <p> 일시정지 </p>
            <br />
        </Wrapper>
      )}
    </>
  );
}

export default Modal;

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 200px;
  background-color: #000; //수정
  border: none;
  padding: 20px;
  z-index: 999;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* overflow-y: scroll; */
`;

const Button = styled.button`
  margin-left: auto;
  margin-bottom: 20px;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  flex : 0 1 0 ;
  
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  color: #ffffff;
  background-color: #dc3545;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.5s;
  
  &:hover {
    background-color: #c82333;
  }
`;
