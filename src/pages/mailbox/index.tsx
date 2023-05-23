import React, { useState } from "react";
import Icon from "../../icons";
import PopUp from "../../components/pop-up";
import "./style.scss";
interface Props {
  onTypeChange?: (type: string) => void;
}
const MailBox: React.FC<Props> = ({ onTypeChange }) => {
  const [isPopUp, setIsPopUp] = useState<boolean>(false);
  const handleClick = () => {
    setIsPopUp(true);
  };
  return (
    <div className="mailbox">
      <Icon name="mailbox" size="xsmall" color="blue" />
      <div className="mailbox__text">收件箱</div>
      <Icon name="downarrow" size="xsmall" onClick={handleClick} />
      {isPopUp ? (
        <PopUp>
          <div>popup</div>
        </PopUp>
      ) : (
        ""
      )}
    </div>
  );
};

export default MailBox;
