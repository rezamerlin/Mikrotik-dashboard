import { Outlet } from "react-router";
import Header from "./Header";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <Header />
      <Outlet />
    </main>
  );
}

export default Main;
