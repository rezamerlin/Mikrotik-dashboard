import Main from "../components/Main";
import Navbar from "../components/Navbar";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Navbar />
      <Main />
    </div>
  );
}

export default Dashboard;
