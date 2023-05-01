import React from "react";
import { useState } from "react";
import styled from "styled-components";

function Select({ option }) {
    const [contextMenuOpen, setContextMenuOpen] = useState(false);

    const [selectedItem, setSelectedItem] = useState(option[0]);

    const openContextMenu = () => {
      if (contextMenuOpen) {
        setContextMenuOpen(false);
      } else {
        setContextMenuOpen(true);
      }
    };

    const selectMenu = (item) => {
      setSelectedItem(item);
      setContextMenuOpen(false);
    };

    return (
      <div>
        <div>
          <StSelectButton onClick={openContextMenu}>{selectedItem}</StSelectButton>
          {contextMenuOpen && (
            <div>
              {option.map((item) => (
                <div>
                  <StSelectButton onClick={() => selectMenu(item)}>
                    {item}
                  </StSelectButton>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }


export default Select;

const StSelectButton = styled.button`
  width: 140px;
  height: 35px;
  background-color: #d9a7c7;
  border-radius: 12px;
  border: none;
`;