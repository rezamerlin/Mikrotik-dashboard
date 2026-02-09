import { useEffect } from "react";
import styles from "./Home.module.css";
import TotalInfo from "./TotalInfo";
function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.home}>
        <h1>Home</h1>
        <div className="filterContainer">
          <select>
            <option value="">Sort</option>
            <option value="">Sort</option>
            <option value="">Sort</option>
          </select>
        </div>
      </div>
      <TotalInfo />
      
    </div>
  );
}

export default Home;
