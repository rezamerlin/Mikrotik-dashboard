import TotalInfo from "./TotalInfo";
import UsersList from "./UsersList";
import styles from "./User.module.css";

function User() {
  return (
    <div className={styles.usersContainer}>
      <div className={styles.users}>
        <h1>User Information</h1>
        <div className="filterContainer">
          <select>
            <option value="">Sort</option>
            <option value="">Sort</option>
            <option value="">Sort</option>
          </select>
        </div>
      </div>
      <TotalInfo />
      <UsersList />
    </div>
  );
}

export default User;
