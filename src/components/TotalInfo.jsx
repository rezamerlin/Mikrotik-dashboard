import { useUserContext } from "../Contexts/UserContext";
import styles from "./TotalInfo.module.css";
import TotalInfoCard from "./TotalInfoCard";
function TotalInfo() {
  const { cardHome } = useUserContext();
  return (
    <section className={styles.totalInfo}>
      {cardHome.map((data) => (
        <TotalInfoCard data={data} key={data.name} />
      ))}
    </section>
  );
}

export default TotalInfo;
