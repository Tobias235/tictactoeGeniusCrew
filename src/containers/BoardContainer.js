import { useRef } from "react";

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
        //an if statement to check if globalSquares[a] is strictly matching with B and C
        if (
          globalSquares[a] &&
          globalSquares[a] === globalSquares[b] &&
          globalSquares[a] === globalSquares[c]
        ) {
          //if statement is passed. We have a winner and the state will be changed
          //Dispatching it through actions to change gameEnd to the opposite of current state
          dispatch(setGameEnd(!gameEnd));
        }
      });
    };
    //run the function to check if anyone won the game
    isGameWon();

    //function to check if theres a tie.
    const checkTie = () => {
      //a boolean set to true to see if the squares are filled.
      let filled = true;
      //a forEach loop to run through the squares.
      globalSquares.forEach((square) => {
        //an if statement to check if theres any squares left that is possible to place a marker on
        if (square === null) {
          filled = false;
        }
      });
      //if the board is full, filled will be true and it will dispatch through actions to the reducer
      //Tie will be set to true and game ended and state is updated
      if (filled) {
        dispatch(setTie(true));
        dispatch(setGameEnd(!gameEnd));
      }
    };
    //run the function to check if theres a tie
    checkTie();
  }, [globalSquares, dispatch]);

  return (
    <div className={styles.boardContainer}>
      {/* Take the squares array from state and maps through it to get the 9 squares for the board */}
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
