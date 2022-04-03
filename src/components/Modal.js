import styles from "./Modal.module.scss";
import rocket from "../assets/images/modalRocket.svg";
import { useSelector } from "react-redux";

const Modal = () => {
  const winner = useSelector((state) => state.player);
  const tie = useSelector((state) => state.tie);

  const winOrTie = tie ? (
    <h1>
      Its a tie! <br /> Better luck next time
    </h1>
  ) : (
    <h1>
      Congratulations, {winner}. <br />
      You are the winner! Let's go to space!
    </h1>
  );

  return (
    <div className={styles.modal}>
      <img
        src={rocket}
        alt="Rocket with animation to fly space with the winner or both if tie"
      />
      {winOrTie}
      <button>Restart Game</button>¨
    </div>
  );
};

export default Modal;
