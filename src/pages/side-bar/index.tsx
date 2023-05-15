import React from "react";
import "./style.scss";
interface Props {
  isShow: boolean;
}
const SideBar: React.FC<Props> = ({ isShow }) => {
  if (!isShow) {
    return null;
  }
  return (
    <div className="side-bar">
      <div>dfghjk</div>
      <div>ertyui</div>
    </div>
  );
};
export default SideBar;
