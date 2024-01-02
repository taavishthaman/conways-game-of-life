import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import Header from "./components/Header";
import GlobalStyles from "./styles/global";

function App() {
  const [grid, setGrid] = useState(() => {
    return new Array(70).fill(0).map(() => new Array(150).fill(0));
  });

  const [play, setPlay] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);

  function reset() {
    setGrid((matrix) => {
      const matCopy = matrix.map((row) => row.map((ele) => 0));
      return matCopy;
    });
  }

  function gameOfLife() {
    setGrid((matrix) => {
      const matCopy = matrix.map((row) => row.map((ele) => ele));

      const n = matCopy.length;
      const m = matCopy[0].length;

      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          let dx = [1, 1, 0, -1, -1, -1, 0, 1];
          let dy = [0, 1, 1, 1, 0, -1, -1, -1];

          let curr = matCopy[i][j];

          let live_cells = 0;

          for (let k = 0; k < 8; k++) {
            let ny = i + dy[k];
            let nx = j + dx[k];
            if (
              nx >= 0 &&
              ny >= 0 &&
              nx < m &&
              ny < n &&
              (matCopy[ny][nx] === 1 || matCopy[ny][nx] === 3)
            ) {
              live_cells++;
            }
          }

          if (curr === 0) {
            if (live_cells === 3) {
              matCopy[i][j] = 2;
            }
          } else {
            if (live_cells < 2 || live_cells > 3) {
              matCopy[i][j] = 1;
            } else if (live_cells === 2 || live_cells === 3) {
              matCopy[i][j] = 3;
            }
          }
        }
      }

      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (matCopy[i][j] === 1) {
            matCopy[i][j] = 0;
          } else if (matCopy[i][j] === 2) {
            matCopy[i][j] = 1;
          } else if (matCopy[i][j] === 3) {
            matCopy[i][j] = 1;
          }
        }
      }

      return matCopy;
    });
  }

  useEffect(() => {
    if (play && !intervalId) {
      const intId = setInterval(() => {
        gameOfLife();
      }, 200);

      setIntervalId(intId);
    } else if (!play) {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    }
  }, [intervalId, play]);

  function changeCellState(i: number, j: number) {
    setGrid((grid) => {
      const gridCopy = grid.map((row) => row.map((col) => col));
      if (gridCopy[i][j] === 0) {
        gridCopy[i][j] = 1;
      } else {
        gridCopy[i][j] = 0;
      }
      return gridCopy;
    });
  }

  return (
    <>
      <GlobalStyles />
      <Header reset={reset} play={play} setPlay={setPlay}></Header>
      <Grid grid={grid} play={play} changeCellState={changeCellState}></Grid>
    </>
  );
}

export default App;
