import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { User } from "../services/user";

function useUserInfo() {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        const userInfo: User = {
          username: user.username,
          sub: user.attributes.sub,
          email: user.attributes.email,
        };
        setUser(userInfo);
      })
      .catch((error) => console.log(error));
  }, []);

  return user;
}

export default useUserInfo;
