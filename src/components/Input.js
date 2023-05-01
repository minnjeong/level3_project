import React from "react";
import { useState } from "react";
import styled from "styled-components";


function Input() {
    const [price, setPrice] = useState(0);
    const [name, setName] = useState("");

    // 이름
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    // 가격
    const PriceChangeHandler = (event) => {
        const value = event.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 값은 모두 제거
        setPrice(value);
    };

    // 콤마
    const commaPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // 저장
    const saveHandler = (name, price) => {
        alert(`{name: ${name} price: ${price}}`);
       
        // if (name === "" || price === "") {
        //     alert("이름과 가격 모두 입력해주세요.")
        // else alert(`{name: ${name} price: ${price}}`);
            
        }
    

    return (
        <div>
            <h1>Input</h1>
            <InputArea>
                <StHeader>
                    <div>
                        <label>이름</label>
                        <Stinput type="text" value={name} onChange={nameChangeHandler} />
                    </div>
                    <div>
                        <label>가격</label>
                        <Stinput
                            type="text"
                            value={commaPrice(price)}
                            onChange={PriceChangeHandler}
                        />
                    </div>
                    <div>
                        <Stbutton
                            background="#d9a7c7"
                            bordercolor="#d9a7c7"
                            width="100px"
                            height="40px"
                            onClick={() => saveHandler(name, price)}
                        >
                            저장
                        </Stbutton>
                    </div>
                </StHeader>
            </InputArea>
        </div>
    );
}

const InputArea = styled.form`
align-items: center;
`

const StHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
`;

const Stinput = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
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

export default Input;