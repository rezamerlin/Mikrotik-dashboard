import styles from "./NavProfile.module.css";
function NavProfile() {
  return (
    <div className={styles.navProfile}>
      <div className={styles.imageContainer}>
        <img src="/avatar.jpg" alt="" />
      </div>
      <div className={styles.navProfileInfo}>
        <h4>Christina Swertzh</h4>
        <span className={styles.email}>christinaswe87@gmail.com</span>
      </div>
      <div className="customeBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#162556"
        >
          <path d="M480-120 300-300l58-58 122 122 122-122 58 58-180 180ZM358-598l-58-58 180-180 180 180-58 58-122-122-122 122Z" />
        </svg>
      </div>
    </div>
  );
}

export default NavProfile;
