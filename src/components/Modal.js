import styles from "./Modal.module.scss";
import rocket from "../assets/images/modalRocket.svg";
import { useSelector, useDispatch } from "react-redux";
import { setRestart } from "../actions/action";

const Modal = () => {
  //getting the state through useSelector hook and assigns to variables
  const winner = useSelector((state) => state.player);
  const tie = useSelector((state) => state.tie);

  //set useDispatch hook to the variable dispatch
  const dispatch = useDispatch();

  const winOrTie = tie ? (
    <h1>
      Its a tie! <br /> Better luck next time
    </h1>
  ) : (
    <h1>
      Congratulations, {winner}. <br />
      You are the winner! <br />
      Let's go to space!
    </h1>
  );

  return (
    <div className={styles.modal}>
      <img
        src={rocket}
        alt="Rocket with animation to fly space with the winner or both if tie"
      />
      {winOrTie}
      {/* Setting a click function on the button and dispatching to the actions
      That button is clicked and it will send the correct actions to the reducer and restart the game */}
      <button type="button" onClick={() => dispatch(setRestart())}>
        Restart Game
      </button>
      ¨
    </div>
  );
};

export default Modal;
