import Square from "../components/Square";
import styles from "./BoardContainer.module.scss";
import astronaut from "../assets/images/astronaut.svg";
import rocket from "../assets/images/rocket.svg";

const BoardContainer = () => {
  return (
    <div className={styles.boardContainer}>
      <Square image={astronaut} />
      <Square image={rocket} />
      <Square />

      <Square />
      <Square />
      <Square />

      <Square />
      <Square />
      <Square />
    </div>
  );
};

export default BoardContainer;
