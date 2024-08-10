import { useEffect } from "react";
import useStore from "./store";
import UserService from "../services/UserService";

const useUser = () => {
  const { user, setUser } = useStore();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await UserService().getUserByUsername("jakezegil");
      setUser(user.data);
    };
    fetchUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user };
};

export default useUser;
