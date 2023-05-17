import Icon from "../../icons";
import "./style.scss";
function MailBox() {
  return (
    <div className="mailbox">
      <Icon name="mailbox" size="xsmall" color="blue" />
      <div className="mailbox__text">收件箱</div>
      <Icon name="downarrow" size="xsmall" />
    </div>
  );
}

export default MailBox;
