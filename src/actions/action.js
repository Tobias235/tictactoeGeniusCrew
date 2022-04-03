//Function that will take dispatches and pass it on to the reducer
export const setCheckMarks = (marks) => {
  return {
    type: "SET_MARKS",
    payload: marks,
  };
};
