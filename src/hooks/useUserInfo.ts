import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { User } from "../services/user";

let cache: User = { username: "", sub: "", email: "" };
function useUserInfo() {
  const [user, setUser] = useState<User>(cache);
  useEffect(() => {
    if (!cache.username) {
      Auth.currentAuthenticatedUser()
        .then((user) => {
          const userInfo: User = {
            username: user.username,
            sub: user.attributes.sub,
            email: user.attributes.email,
          };
          cache = userInfo;
          setUser(userInfo);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return user;
}

export default useUserInfo;
