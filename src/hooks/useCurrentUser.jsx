import { useEffect, useState } from "react";
import { auth } from "../../firebase.config";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("current_user")) || null,
  );

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("current_user"))) {
      setCurrentUser(JSON.parse(localStorage.getItem("current_user")));
    } else {
      setCurrentUser(null);
    }
  }, [auth.currentUser]);

  return { currentUser };
};

export default useCurrentUser;
