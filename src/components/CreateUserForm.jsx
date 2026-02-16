import { useReducer } from "react";
import styles from "./CreateUserForm.module.css";
import { useUserContext } from "../Contexts/UserContext";

const initialState = {
  username: "",
  password: "",
  preshared: 1,
  paymentcard: "",
};

//I use useReducer hook just for execise
function reducer(state, action) {
  switch (action.type) {
    case "username":
      return { ...state, username: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "preshared":
      return { ...state, preshared: action.payload };
    case "payment":
      return {
        ...state,
        paymentcard: action.payload.replace(/(\d{4})(?=\d)/g, "$1-"),
      };
  }
}
function CreateUserForm() {
  const [{ username, password, paymentcard, preshared }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const { createUser, setIsShowModal } = useUserContext();

  function handlesubmit(e) {
    e.preventDefault();
    const newUser = {
      username,
      password,
      preshared,
    };
    createUser(newUser);
  }
  return (
    <div className={styles.form}>
      <h2 className={styles.titleForm}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#000"
        >
          <path d="M726.67-400v-126.67H600v-66.66h126.67V-720h66.66v126.67H920v66.66H793.33V-400h-66.66ZM250.33-524.33Q206.67-568 206.67-634t43.66-109.67Q294-787.33 360-787.33t109.67 43.66Q513.33-700 513.33-634t-43.66 109.67Q426-480.67 360-480.67t-109.67-43.66ZM40-160v-100q0-34.67 17.5-63.17T106.67-366q70.66-32.33 131-46.5Q298-426.67 360-426.67t122 14.17q60 14.17 130.67 46.5 31.66 15 49.5 43.17Q680-294.67 680-260v100H40Zm66.67-66.67h506.66V-260q0-14.33-7.83-27t-20.83-19q-65.34-31-116.34-42.5T360-360q-57.33 0-108.67 11.5Q200-337 134.67-306q-13 6.33-20.5 19t-7.5 27v33.33Zm315.16-345.5Q446.67-597 446.67-634t-24.84-61.83Q397-720.67 360-720.67t-61.83 24.84Q273.33-671 273.33-634t24.84 61.83Q323-547.33 360-547.33t61.83-24.84ZM360-634Zm0 407.33Z" />
        </svg>
        Create user form
      </h2>
      <button
        onClick={() => setIsShowModal((x) => !x)}
        className={styles.closeBtn}
      >
        &times;
      </button>
      <form onSubmit={handlesubmit}>
        <div className={styles.important}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) =>
              dispatch({ type: "username", payload: e.target.value })
            }
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              dispatch({
                type: "password",
                payload: e.target.value,
              })
            }
          />
          <label htmlFor="preshared">Enter user can be connect</label>
          <input
            id="preshared"
            type="text"
            placeholder="Enter User can be connected"
            value={preshared}
            onChange={(e) =>
              dispatch({ type: "preshared", payload: e.target.value })
            }
          />
        </div>
        <div className={styles.moreOptions}>
          <label htmlFor="cards">Payment Card</label>
          <input
            id="cards"
            type="text"
            value={paymentcard}
            onChange={(e) =>
              dispatch({ type: "payment", payload: e.target.value })
            }
          />
          <div className={styles.chooseServer}>
            <label htmlFor="de">Which server for connection?</label>
            <div className={styles.selectServer}>
              <input id="de" name="createUser" type="radio" />
              <label htmlFor="de">de</label>
              <input id="dubai" name="createUser" type="radio" />
              <label htmlFor="dubai">dubai</label>
              <input id="tr" name="createUser" type="radio" />
              <label htmlFor="tr">tr</label>
              <input id="usa" name="createUser" type="radio" />
              <label htmlFor="usa">usa</label>
              <input disabled id="fr" name="createUser" type="radio" />
              <label disabled htmlFor="fr">
                fr
              </label>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className="btn btnBlue">Create new user</button>
        </div>
      </form>
    </div>
  );
}

export default CreateUserForm;
