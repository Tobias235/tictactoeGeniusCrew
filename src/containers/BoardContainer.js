import Square from "../components/Square";
import styles from "./BoardContainer.module.scss";
import astronaut from "../assets/images/astronaut.svg";
import rocket from "../assets/images/rocket.svg";
import { useSelector } from "react-redux";

const BoardContainer = () => {
  const squares = useSelector((state) => state.marks);

  const handleClick = () => {};

  return (
    <div className={styles.boardContainer}>
      {squares.map((square, i) => (
        <Square
          key={i}
          id={i}
          image={square}
          onClick={(e) => handleClick(i, e)}
        ></Square>
      ))}
    </div>
  );
};

export default BoardContainer;
