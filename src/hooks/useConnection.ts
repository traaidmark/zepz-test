import { useState, useEffect } from "react";

export const useConnection = () => {

  const [isConnected, setConnection] = useState(navigator.onLine);

  useEffect(() => {
    function onlineHandler() {
      setConnection(true);
    }

    function offlineHandler() {
      setConnection(false);
    }

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);


    return () => {
        window.removeEventListener("online", onlineHandler);
        window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  return {
    isConnected
  }

}