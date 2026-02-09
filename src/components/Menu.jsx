import styles from "./Menu.module.css";
import MenuList from "./MenuList";
function Menu() {
  return (
    <div className={styles.menuContainer}>
      <MenuList />
    </div>
  );
}

export default Menu;
