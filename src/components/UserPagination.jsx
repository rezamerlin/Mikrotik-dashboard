import { useUserContext } from "../Contexts/UserContext";
import styles from "./UserPagination.module.css";
function UserPagination() {
  const { setIsShowModal } = useUserContext();
  return (
    <div className={styles.options}>
      <div></div>
      <button className="btn btnBlue" onClick={() => setIsShowModal((x) => !x)}>
        Create New User
      </button>
    </div>
  );
}

export default UserPagination;
