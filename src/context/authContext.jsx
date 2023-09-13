import { createContext, useEffect, useState } from "react";
import { refreshCall } from "../service/api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [account, setAccount] = useState([]);
  const [accountStatus, setAccountStatus] = useState(true);

  const getUserFromToken = (token) => {
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      return decodedToken;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  useEffect(() => {
    const tokenfunction = async () => {
      const token = localStorage.getItem("admintoken");
      if (token) {
        if (token) {
          const tokenData = await getUserFromToken(token);
          if (tokenData) {
            setAccount([tokenData]);
            setAccountStatus(true);
          }
        }
      } else {
        setAccountStatus(false);
      }
    };
    tokenfunction();
  }, [setAccount, setAccountStatus, accountStatus]);

  useEffect(() => {
    const data = setInterval(() => {
      if (accountStatus && account) {
        const token = localStorage.getItem("admintoken");
        if (token) {
          const trydata = JSON.parse(atob(token.split(".")[1]));
          const refreshme = localStorage.getItem("adminrefreshtoken");
          const redata = JSON.parse(atob(refreshme.split(".")[1]));
          const currentTimestamp = Date.now() / 1000;
          if (trydata.exp > currentTimestamp && redata.exp > currentTimestamp) {
            const temp = { refreshtoken: refreshme };
            refreshCall(temp);
          } else {
            localStorage.removeItem("admintoken");
            localStorage.removeItem("adminrefreshtoken");
            setAccountStatus(false);
            setAccount([]);
          }
        }
      }
    }, 1000 * 60 * 60 * 23);

    return () => clearInterval(data);
  }, [accountStatus, account]);

  console.log("accountStatus: ", accountStatus);

  return (
    <DataContext.Provider
      value={{ account, setAccount, accountStatus, setAccountStatus }}
    >
      {children}
    </DataContext.Provider>
  );
};
