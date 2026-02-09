import { NavLink } from "react-router"
import styles from './MenuItem.module.css'
function MenuItem({data}) {
    return (
        <li className={styles.menuItemContainer} >
           <NavLink className= {styles.menuItem} to={`${data.path}`}>
            <img src={data.icon} alt="" />
            <span>{data.label}</span>
           </NavLink>
        </li>
    )
}

export default MenuItem
