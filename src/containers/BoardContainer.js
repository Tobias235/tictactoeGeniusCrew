import Square from "../components/Square";
import styles from "./BoardContainer.module.scss";
import astronaut from "../assets/images/astronaut.svg";
import rocket from "../assets/images/rocket.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  setCheckMarks,
  setPlayer,
  setGameEnd,
  setTie,
} from "../actions/action";
import { useEffect } from "react";
import WinningPatterns from "../util/winningPattern";

const BoardContainer = () => {
  //importing the global state from redux using the useSelector hook
  //here we get the squares, if game is ended and the current player
  const globalSquares = useSelector((state) => state.marks);
  const gameEnd = useSelector((state) => state.gameEnd);
  const player = useSelector((state) => state.player);

  //Using the dispatch hook to dispatch actions that will be send to
  //the actions file and to the reducer so the state gets updated
  const dispatch = useDispatch();

  const handleClick = (e, i) => {
    //using the ES6 spread operator to assign the state array to setMark variable
    const setMark = [...globalSquares];
    //using a ternerary operator to check if player is equal to
    //astronaut and if true, set player to rocket. Else set to Astronaut
    const playerMark = player === "Astronaut" ? "Rocket" : "Astronaut";
    //a if check to make sure only one square gets a marked
    if (Number(e.target.id) === i) {
      //another if check to make sure that you cant select same square twice
      //and so gameEnd is set to false
      if (setMark[i] && !gameEnd) return;
      //ternary operator to decied which SVG will be used as mark
      setMark[i] = playerMark === "Astronaut" ? astronaut : rocket;
      //dispatching the mark placed and changes player
      dispatch(setPlayer(playerMark));
      dispatch(setCheckMarks(setMark));
    }
  };

  //useEffect hook to run everytime globalSquares state changes
  useEffect(() => {
    const isGameWon = () => {
      //using a imported file with an nested array with different patterns
      //that is 3 in a row, diagonal, row and column.
      //using .forEach to loop through the array.
      WinningPatterns.forEach((pattern) => {
        //After looped through array it returns all the nested arrays
        //assign the 3 numbers of each array to A, B and C.
        const [a, b, c] = pattern;
        if (
          globalSquares[a] &&
          globalSquares[a] === globalSquares[b] &&
          globalSquares[a] === globalSquares[c]
        ) {
          dispatch(setGameEnd(!gameEnd));
        }
      });
    };
    isGameWon();
  }, [globalSquares]);

  return (
    <div className={styles.boardContainer}>
      {globalSquares.map((square, i) => (
        <Square
          key={i}
          id={i}
          image={square}
          onClick={(e) => handleClick(e, i)}
        ></Square>
      ))}
    </div>
  );
};

export default BoardContainer;
