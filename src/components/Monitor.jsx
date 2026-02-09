import { useEffect, useState } from "react";
import styles from "./Monitor.module.css";
import { useSearchParams } from "react-router";
const USERNAME = "";
const PASSWORD = "";
function bytesToGB(bytes) {
  return (bytes / 1024 / 1024 / 1024).toFixed(2);
}
function Monitor() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userInfo, setUserInfo] = useState([]);
  const id = searchParams.get("id");
  useEffect(() => {
    async function getUsers() {
      try {
        if (!id) return;
        const res = await fetch(`/router/rest/user-manager/user/monitor`, {
          method: "post",
          headers: {
            Authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            once: true,
            ".id": `${id}`,
          }),
        });
        const data = await res.json();
        console.log(data);
        setUserInfo(data);
      } catch {
        alert("field user data");
      }
    }
    getUsers();
  }, [id]);
  console.log(userInfo);
  return (
    <div>
      {userInfo.map((x) => (
        <p>{bytesToGB(x["total-download"])} Gb</p>
      ))}
    </div>
  );
}

export default Monitor;
