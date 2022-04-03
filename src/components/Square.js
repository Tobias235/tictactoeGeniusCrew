import styles from "./Square.module.scss";

const Square = (props) => {
  return (
    <div
      className={styles.square}
      id={props.id}
      onClick={props.onClick}
      value={props.value}
    >
      {props.image ? <img src={props.image} alt="mark" /> : null}
    </div>
  );
};

export default Square;
