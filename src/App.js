import styles from "./App.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BoardContainer from "./containers/BoardContainer";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";

function App() {
  const isGameEnded = useSelector((state) => state.gameEnd);
  return (
    <div className={styles.main}>
      <Header />
      <Modal />
      {isGameEnded ? null : null}
      <BoardContainer />
      <Footer />
    </div>
  );
}

export default App;
