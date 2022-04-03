import styles from "./App.module.scss";
import Header from "./components/Header";
import BoardContainer from "./containers/BoardContainer";

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <BoardContainer />
    </div>
  );
}

export default App;
