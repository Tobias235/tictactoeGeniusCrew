import Square from "../components/Square";
import styles from "./BoardContainer.module.scss";

const BoardContainer = () => {
  return (
    <div className={styles.boardContainer}>
      <Square />
      <Square />
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
