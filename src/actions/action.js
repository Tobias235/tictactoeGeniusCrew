//Different actions that will dispatch from the file it gets used
//and tell the reducer what to do and change the state accordingly.

//Switches between the different marks (Astronaut and Rocket)
export const setCheckMarks = (marks) => {
  return {
    type: "SET_MARKS",
    payload: marks,
  };
};

//Switches between the different players (Astronaut and Rocket)
export const setPlayer = (player) => {
  return {
    type: "SET_PLAYER",
    payload: player,
  };
};

//Sends action to change the boolean
export const setGameEnd = (gameEnd) => {
  return {
    type: "SET_GAMEEND",
    payload: gameEnd,
  };
};

//Changes the boolean of the tie case
export const setTie = (tie) => {
  return {
    type: "SET_TIE",
    payload: tie,
  };
};

//Sends action to reset the state to the intial state
export const setRestart = () => {
  return {
    type: "SET_RESTART",
  };
};
