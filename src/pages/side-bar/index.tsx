import React from "react";
import AddProject from "../add-project";
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
      <AddProject />
    </div>
  );
};
export default SideBar;
