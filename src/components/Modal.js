import styles from "./Modal.module.scss";
import rocket from "../assets/images/modalRocket.svg";

const Modal = () => {
  return (
    <div className={styles.modal}>
      <img
        src={rocket}
        alt="Rocket with animation to fly space with the winner or both if tie"
      />
      <h1>Congratulations You are the winner! Let's go to space!</h1>
      <button>Restart Game</button>¨
    </div>
  );
};

export default Modal;
