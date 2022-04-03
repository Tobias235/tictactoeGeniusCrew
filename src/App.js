import styles from "./App.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BoardContainer from "./containers/BoardContainer";
import Modal from "./components/Modal";

function App() {
  return (
    <div className={styles.main}>
      <Header />
      {/* <Modal /> */}
      <BoardContainer />
      <Footer />
    </div>
  );
}

export default App;
