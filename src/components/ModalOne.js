import React from "react";
import styled from "styled-components";


const Modal = ({ open, close, header, on }) => {
    return (
      <div>
        {open ? (
          <Stlayout>
            <Stmodal>
              <header>{header}</header>
              <StHeader>
                <Stbutton
                  background="#d9a7c7"
                  bordercolor="#d9a7c7"
                  width="100px"
                  height="40px"
                  className="close"
                  onClick={close}
                >
                  닫기
                </Stbutton>
                <Stbutton
                  background="#fffcdc"
                  bordercolor="#fffcdc"
                  width="100px"
                  height="40px"
                  className="on"
                  onClick={on}
                >
                  확인
                </Stbutton>
              </StHeader>
            </Stmodal>
          </Stlayout>
        ) : null}
      </div>
    );
  };

  export default Modal;

  const Stlayout = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0px;
  opacity: 1;
  position: fixed;
  background-color: rgba(221, 221, 221, 0.8);
`;

const Stmodal = styled.div`
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: white;
  width: 500px;
  height: 300px;
  position: absolute;
  top: 50%;
  opacity: 1;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Stbutton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: ${(props) => props.color};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border: 3px solid ${(props) => props.bordercolor};
  background-color: ${(props) => props.background};
  font-weight: 600;
  &:active {
    opacity: 0.5;
  }
`;

const StHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  gap: 10px;
  margin-bottom: 10px;
`;
