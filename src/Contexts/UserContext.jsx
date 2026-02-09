import { createContext, useContext, useEffect, useState } from "react";
const BASE_URL = "http://localhost:9000/";
const UserContext = createContext();
const USERNAME = "";
const PASSWORD = "";
function UserProvider({ children }) {
  const [menuData, setMenuData] = useState([]);
  const [cardHome, setCardHome] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMenu() {
      try {
        setIsLoading((s) => !s);

        const res = await fetch(`${BASE_URL}menu`);
        const data = await res.json();

        setMenuData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading((s) => !s);
      }
    }

    getMenu();
  }, []);

  useEffect(() => {
    async function getCardHome() {
      try {
        setIsLoading((s) => !s);
        const res = await fetch(`http://localhost:9001/cards`);
        const data = await res.json();
        setIsLoading((s) => !s);
        setCardHome(data);
      } catch {
        alert("Data Field");
      }
    }
    getCardHome();
  }, []);

  useEffect(() => {
    async function getUsers() {
      try {
        setIsLoading((s) => !s);
        const res = await fetch(`/router/rest/user-manager/user`, {
          method: "get",
          headers: {
            Authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        setUsers(data);
      } catch {
        alert("field user data");
      } finally {
        setIsLoading((s) => !s);
      }
    }
    getUsers();
  }, []);
  return (
    <UserContext.Provider value={{ menuData, isLoading, cardHome, users }}>
      {children}
    </UserContext.Provider>
  );
}
//Create CustomHook for destracture data
function useUserContext() {
  const context = useContext(UserContext);
  return context;
}

export { UserProvider, useUserContext };
