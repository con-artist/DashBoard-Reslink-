import { useContext } from "react";
import UserContext from "./UserContext";

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("error in using context");
  }
  return context;
};

export default useUser;
