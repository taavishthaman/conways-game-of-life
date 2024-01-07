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

const StyledTable = styled.table`
  margin: 0;
  padding: 0;
  border-collapse: collapse;
`;

const StyledTr = styled.tr`
  margin: 0;
  padding: 0;
`;

const StyledTd = styled.td<TdProps>`
  width: 1rem;
  height: 1rem;
  border: 1px solid var(--color-blue);
  background-color: ${(props) =>
    props.value === 1 ? "var(--color-blue)" : "#fff"};
  transition: background-color 20ms ease-in-out;
  padding: 0;
  margin: 0;
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
