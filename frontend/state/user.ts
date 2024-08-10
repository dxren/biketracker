import { useEffect } from "react";
import useStore from "./store";
import UserService from "../services/UserService";

const useUser = (username: string = "jakezegil") => {
  const { user, setUser } = useStore();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await UserService().getUserByUsername(username);
      console.log(user.data);
      setUser(user.data);
    };
    fetchUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return { user };
};

export default useUser;
