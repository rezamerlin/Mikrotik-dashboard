import styles from "./UsersList.module.css";
import UserItem from "./UserItem";
import { useUserContext } from "../Contexts/UserContext";
import { useState } from "react";
import { Link } from "react-router";
import Spinner from "./Spinner";
import UserPagination from "./UserPagination";

function UsersList() {
  const { users, isLoading } = useUserContext();
  if (isLoading) return <Spinner />;
  const newUsers = users.map((user, index) => {
    return { ...user, id: `${index}` };
  });
  const [firstSlice, setFirstSlice] = useState(0);
  const [lastSlice, setLastSlice] = useState(10);

  const currentUsers = newUsers.slice(firstSlice, lastSlice);

  function nextPageHandle() {
    setFirstSlice((prev) => prev + 10);
    setLastSlice((prev) => prev + 10);
  }
  return (
    <section>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Password</th>
            <th>Shared User</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <UserItem user={user} id={user.id} key={user.name} />
          ))}
        </tbody>
      </table>
      <UserPagination />
    </section>
  );
}

export default UsersList;
