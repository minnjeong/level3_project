import React from "react";
import { useState } from "react";
import sync from "react-router-redux/lib/sync";
import styled from "styled-components";


function Select({ option, option2 }) {

    // 드롭다운 열고 닫기 
    const [dropdownOpen, setDropdownOpen] = useState(false)
    // 옵션 선택
    const [selectedOption, setSelectedOption] = useState(option[0])

    const openContextMenu = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const selectMenu = (e) => {
        // console.log('selectMenu 실행됨')
        setSelectedOption(e.target.textContent);
        setDropdownOpen(false);
    };

    return (
        <SelectArea>
            <SelectButton onClick={openContextMenu}>
                <span>{selectedOption}</span>
                <span>▾</span>
                <DropDown>
                {dropdownOpen ? <div>
                    {option.map((option) => {
                        return (
                            <Stdiv key={option} onClick={selectMenu} value={option}>{option}</Stdiv>
                        )
                    })}
                </div> : null}
                </DropDown>
        </SelectButton >
        </SelectArea >
    )
}

export default Select;

const SelectButton = styled.button`
  width: 140px;
  height: 35px;
  background-color: #d9a7c7;
  border-radius: 12px;
  border: none;
`;

const Stdiv = styled.div`
    width: 140px;
    height: 35px;
    border: none;
    background-color: #d9a7c7;
`

const SelectArea = styled.div`
display: flex;
`

const DropDown = styled.div`
justify-content: center;
display: flex;

`
