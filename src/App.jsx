import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Input from "./components/Input";
import Select from "./components/Select";
import ModalOne from "./components/ModalOne";
import ModalTwo from "./components/ModalTwo";


function App() {
  const option = ["리액트", "자바", "스프링", "리액트 네이티브"];
  const option2 = ["리액트", "자바"];

  // 모달 1 --------------------------------------------------
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [modalon, setModalOn] = useState("on");

  const OnchangeHandler = () => {
    console.log(modalon);
    setModalOn("on");
  };

  // 모달 2 ------------------------------------------------

  const [modalOpen2, setModalOpen2] = useState(false);

  const openModal2 = () => {
    setModalOpen2(true);
  };
  const closeModal2 = () => {
    setModalOpen2(false);
  };

  return (
    <Stlayout>
      <Button />
      <Input />

      <h1>Modal</h1>
      <StHeader>
        <Stbutton
          background="#d9a7c7"
          bordercolor="#d9a7c7"
          width="100px"
          height="40px"
          onClick={openModal}
        >
          open modal
        </Stbutton>

        <div>
          <Stbutton
            bordercolor="#d9a7c7"
            background="white"
            width="200px"
            height="50px"
            onClick={openModal2}
          >
            open modal
          </Stbutton>
        </div>
      </StHeader>
      <h1>Select</h1>
      <Stseldiv>
        <Select option={option} />
        <Select option={option2} />
      </Stseldiv>
      <ModalOne
        open={modalOpen}
        close={closeModal}
        header="닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요"
        on={OnchangeHandler}
      ></ModalOne>
      <ModalTwo
        open={modalOpen2}
        close={closeModal2}
        header="닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요"
      ></ModalTwo>
    </Stlayout>
  );
}
export default App;


const Stlayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
`;

const StHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
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

const Stseldiv = styled.div`
  display: flex;
  gap: 200px;
`;