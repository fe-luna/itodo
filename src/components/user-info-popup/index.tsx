import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { useSelector } from "react-redux";
import "./style.scss";
function UserInfoPopup() {
  const userName = useSelector((state: any) => state.user.username);
  const [isPop, setIsPop] = useState(false);

  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    async function getAvatarUrl() {
      const user = await Auth.currentAuthenticatedUser();
      const attributes = await Auth.userAttributes(user);
      const avatarAttribute = attributes.find(
        (attr) => attr.Name === "picture"
      );
      if (avatarAttribute) {
        setAvatarUrl(avatarAttribute.Value);
      }
    }

    getAvatarUrl();
  }, []);

  const handleClick = () => {
    setIsPop(true);
  };

  return (
    <div className="user-info" onClick={handleClick}>
      <div>{userName}</div>
      {isPop && <div className="user-info-popup">popup</div>}
    </div>
  );
}
export default UserInfoPopup;
