import styles from './Header.module.css'
import NavHeader from './NavHeader'
import Search from './Search'
function Header() {
    return (
        <header className={styles.header}>
            <Search/>
            <NavHeader/>
        </header>
    )
}

export default Header
