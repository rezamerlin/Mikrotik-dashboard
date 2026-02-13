import { useEffect, useState } from "react";
import styles from "./Monitor.module.css";
import { useSearchParams } from "react-router";
const BASE_URL = "https://my-json-server.typicode.com/rezamerlin/fake-api";
function bytesToGB(bytes) {
  return (bytes / 1024 / 1024 / 1024).toFixed(2);
}
function Monitor() {
  const [searchParams] = useSearchParams();
  const [userInfo, setUserInfo] = useState([]);
  const id = searchParams.get("id");
  useEffect(() => {
    async function getUsers() {
      try {
        if (!id) return;
        const res = await fetch(`${BASE_URL}/traffic`, {
          method: "get",
        });
        const data = await res.json();
        console.log("data:");
        console.log(data);
        setUserInfo(data[id]);
      } catch {
        alert("field user data");
      }
    }
    getUsers();
  }, [id]);
  return (
    <div>
      <p>{userInfo["total-download"]}</p>
    </div>
  );
}

export default Monitor;
