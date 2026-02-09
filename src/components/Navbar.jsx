import Menu from "./Menu";
import styles from "./Navbar.module.css";
import NavProfile from "./NavProfile";
import Search from "./Search";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavProfile />
      <Search />
      <Menu />
    </nav>
  );
}

export default Navbar;
