import styled from "styled-components";
import { FaPlay, FaPause, FaEraser } from "react-icons/fa";
import React from "react";

interface HeaderProps {
  reset: () => void;
  play: boolean;
  setPlay: (s: boolean) => void;
}

const StyledHeader = styled.div`
  height: 8rem;
  background-color: var(--color-midnight-green);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
`;

const StyledTitle = styled.p`
  font-size: 3rem;
  color: var(--color-emerald);
  font-style: bold;
  text-transform: uppercase;
`;

const ControlPanel = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  border-width: 0;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  padding: 0;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
`;

const Header: React.FC<HeaderProps> = ({ reset, play, setPlay }) => {
  return (
    <StyledHeader>
      <StyledTitle>Conway's Game of Life</StyledTitle>
      <ControlPanel>
        {play ? (
          <Button
            onClick={() => {
              setPlay(false);
            }}
          >
            <FaPause size={35} color="#06d6a0" />
          </Button>
        ) : (
          <Button
            onClick={() => {
              setPlay(true);
            }}
          >
            <FaPlay size={35} color="#06d6a0" />
          </Button>
        )}

        <Button
          onClick={() => {
            if (!play) {
              reset();
            }
          }}
        >
          <FaEraser size={35} color="#06d6a0" />
        </Button>
      </ControlPanel>
    </StyledHeader>
  );
};

export default Header;
