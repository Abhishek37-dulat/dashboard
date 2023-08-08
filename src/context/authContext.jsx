import { createContext, useEffect, useState } from "react";
import { refreshCall } from "../service/api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [account, setAccount] = useState([]);
  const [accountStatus, setAccountStatus] = useState(false);

  useEffect(() => {
    const data = setInterval(() => {
      if (accountStatus && account) {
        const token = localStorage.getItem("token");
        if (token) {
          const trydata = JSON.parse(atob(token.split(".")[1]));
          const refreshme = localStorage.getItem("refreshtoken");
          const redata = JSON.parse(atob(refreshme.split(".")[1]));
          const currentTimestamp = Date.now() / 1000;
          if (trydata.exp > currentTimestamp && redata.exp > currentTimestamp) {
            const temp = { refreshtoken: refreshme };
            console.log(temp);
            refreshCall(temp);
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("refreshtoken");
            setAccountStatus(false);
            setAccount([]);
          }
        }
      }
    }, 59 * 59 * 100);

    return () => clearInterval(data);
  }, [accountStatus]);

  return (
    <DataContext.Provider
      value={{ account, setAccount, accountStatus, setAccountStatus }}
    >
      {children}
    </DataContext.Provider>
  );
};
