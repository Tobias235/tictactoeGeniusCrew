//The initial state of the app. 9 squares, Astronaut will be first image.
const InitialState = {
  marks: Array(9).fill(null),
  player: "Astronaut",
  gameEnd: false,
  tie: false,
};

const Reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_MARKS":
      return { ...state, marks: action.payload };
    default:
      return state;
  }
};

export default Reducer;
