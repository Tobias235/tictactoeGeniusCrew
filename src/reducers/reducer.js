//The initial state of the app. 9 squares, Astronaut will be first image.
const InitialState = {
  marks: Array(9).fill(null),
  player: "Astronaut",
  gameEnd: true,
  tie: true,
};

//reducer takes the initial state and depending on which case it
//matches in the switch statement. If no case is matched from the actions
//It will use the default case.
const Reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_MARKS":
      return { ...state, marks: action.payload };
    case "SET_PLAYER":
      return { ...state, player: action.payload };
    case "SET_GAMEEND":
      return { ...state, gameEnd: action.payload };
    case "SET_TIE":
      return { ...state, tie: action.payload };
    case "SET_RESTART":
      return { InitialState };
    default:
      return state;
  }
};

export default Reducer;
