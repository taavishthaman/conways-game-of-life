import React, { useState } from "react";
import styled from "styled-components";

interface GridProps {
  grid: number[][];
  play: boolean;
  changeCellState: (i: number, j: number) => void;
}

interface TdProps {
  value: number;
}

const StyledTable = styled.div`
  margin: 0;
  padding: 0;
`;

const StyledTr = styled.tr`
  margin: 0;
  padding: 0;
`;

const StyledTd = styled.td<TdProps>`
  width: 10px;
  height: 10px;
  border-left: 1px solid var(--color-blue);
  border-bottom: 1px solid var(--color-blue);
  background-color: ${(props) =>
    props.value === 1 ? "var(--color-blue)" : "#fff"};
  transition: background-color 20ms ease-in-out;
`;

const Grid: React.FC<GridProps> = ({ grid, play, changeCellState }) => {
  const [clicking, setClicking] = useState(false);
  return (
    <StyledTable>
      {grid.map((row, i) => {
        return (
          <StyledTr>
            {row.map((cell, j) => (
              <StyledTd
                value={cell}
                onMouseDown={() => {
                  if (play) return;
                  changeCellState(i, j);
                  setClicking(true);
                }}
                onMouseOver={() => {
                  if (clicking && !play) {
                    changeCellState(i, j);
                  }
                }}
                onMouseUp={() => {
                  setClicking(false);
                }}
              ></StyledTd>
            ))}
          </StyledTr>
        );
      })}
    </StyledTable>
  );
};

export default Grid;
