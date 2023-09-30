import React, { useState } from "react";
import UserContext from "./UserContext";

import { userDetails } from "../utils/utils";

const UserProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState(userDetails);

  return (
    <UserContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
