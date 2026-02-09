import styles from "./MenuList.module.css";
import MenuItem from "./MenuItem";
import { useUserContext } from "../Contexts/UserContext";
import Spinner from "./Spinner";
function MenuList() {
  const { menuData, isLoading } = useUserContext();
  console.log(isLoading);
  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.menuList}>
      {menuData.map((data) => (
        <MenuItem data={data} key={data.id} />
      ))}
    </ul>
  );
}

export default MenuList;
