import { Link } from "react-router";
import styles from "./UserItem.module.css";

function UserItem({ user, id }) {
  return (
    <tr className={styles.rows}>
      <td>{user[".id"]}</td>
      <td>{user.name}</td>
      <td>{user.password}</td>
      <td>{user["shared-users"]}</td>
      <td>
        <div className={styles.buttonContainer}>
          <Link className="btn btnBlue" to={`${user[".id"]}?id=${id}`}>
            Monitor
          </Link>
          <Link className="btn btnYellow">Edit</Link>
          <Link className="btn btnRed">Delete</Link>
        </div>
      </td>
    </tr>
  );
}

export default UserItem;
