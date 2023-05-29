import React from "react";
import AddProject from "../add-project";
import Menu from "../../components/menu";
import Icon from "../../icons";
import "./style.scss";
interface Props {
  isShow: boolean;
}
const SideBar: React.FC<Props> = ({ isShow }) => {
  const items = [
    {
      id: "1",
      comp: <Icon name="mailbox" color="blue" size="small" />,
      label: "收件箱",
      length: 10,
      path: "inbox",
    },
    {
      id: "2",
      comp: <Icon name="calendar" color="green" size="small" />,
      label: "今天",
      length: 10,
      path: "today",
    },
    {
      id: "3",
      comp: <Icon name="preview" color="purple" size="small" />,
      label: "预览",
      length: 0,
      path: "preview",
    },
    {
      id: "4",
      comp: <Icon name="filtertag" color="orange" size="small" />,
      label: "过滤器&标签",
      length: 0,
      path: "filter-tag",
    },
  ];
  if (!isShow) {
    return null;
  }
  return (
    <div className="side-bar">
      <Menu items={items} />
      <AddProject />
    </div>
  );
};
export default SideBar;
