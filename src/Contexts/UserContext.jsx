import { createContext, useContext, useEffect, useState } from "react";
const UserContext = createContext();
const BASE_URL='https://my-json-server.typicode.com/rezamerlin/fake-api'
function UserProvider({ children }) {
  const [menuData, setMenuData] = useState([]);
  const [cardHome, setCardHome] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMenu() {
      try {
        setIsLoading((s) => !s);

        const res = await fetch(`${BASE_URL}/menu`);
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
        const res = await fetch(`${BASE_URL}/cards`);
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
        const res = await fetch(`${BASE_URL}/users`, {
          method: "get",
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
