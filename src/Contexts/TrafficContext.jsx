import { createContext, useEffect, useState } from "react";

const TrafficContext = createContext();

function TrafficProvider({ children }) {
  const [interfaces, setInterfaces] = useState([]);
  useEffect(() => {
    async function getInterface() {
      try {
        const res = await fetch(`/router/rest/interface`, {
          method: "get",
          headers: {
            Authorization: "Basic " + btoa(``),
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setInterfaces(data);
      } catch {
        console.log("Error");
      }
    }
    getInterface();
  }, []);
  return (
    <TrafficContext.Provider value={{ interfaces }}>
      {children}
    </TrafficContext.Provider>
  );
}

export { TrafficProvider };
