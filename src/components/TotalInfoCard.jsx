import { useUserContext } from "../Contexts/UserContext";
import styles from "./TotalInfoCard.module.css";
function TotalInfoCard({ data }) {
  const { users } = useUserContext();
  return (
    <article className={styles.card}>
      <div className={styles.info}>
        <div className={styles.cardIcon}>
          <img src={data.icon} />
        </div>
        <div className={styles.cardInfo}>
          <h3 className={styles.cardTitle}>{data.name}</h3>
          <span>{users.length}</span>
        </div>
      </div>
      <div className={`status ${styles[data.statusColor]}`}></div>
    </article>
  );
}

export default TotalInfoCard;
