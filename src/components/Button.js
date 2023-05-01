import React from "react";
import styled from "styled-components";

function Button() {
    return (
        <div>
            {/* 버튼 1 -------------------------------------------------*/}
            <h1>Button</h1>
            <StHeader>
                <StButton
                    bordercolor="#d9a7c7"
                    background="white"
                    width="200px"
                    height="50px"
                    onClick={() => {
                        alert("버튼을 만들어보세요");
                    }}
                >
                    Large Primary Button 〉
                </StButton>

                <StButton
                    bordercolor="#d9a7c7"
                    background="white"
                    width="200px"
                    height="50px"
                >
                    Medium
                </StButton>

                <StButton
                    bordercolor="#d9a7c7"
                    background="white"
                    width="200px"
                    height="50px"
                >
                    Small
                </StButton>
            </StHeader>

            {/* 버튼 2 -------------------------------------------------*/}
            <StHeader>
                <StButton
                    bordercolor="#fffcdc"
                    background="white"
                    width="200px"
                    height="50px"
                    onClick={() => {
                        prompt("어렵나요?");
                    }}
                >
                    Large Primary Button 🔔
                </StButton>

                <StButton
                    bordercolor="#fffcdc"
                    background="white"
                    width="200px"
                    height="50px"
                >
                    Medium
                </StButton>

                <StButton
                    bordercolor="#fffcdc"
                    background="white"
                    width="200px"
                    height="50px"
                >
                    Small
                </StButton>
            </StHeader>
        </div>
    )
}



const StHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
`;

const StButton = styled.button`
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

export default Button;