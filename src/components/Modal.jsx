import { useUserContext } from "../Contexts/UserContext";
import styles from "./Modal.module.css";
function Modal({ children }) {
  const { setIsShowModal } = useUserContext();
  return (
    <div className={styles.modal}>
      <div
        className={styles.overly}
        onClick={() => setIsShowModal((x) => !x)}
      ></div>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
}

export default Modal;
