import React from "react";
import MailBox from "../mailbox";
import Family from "../family";
import FamilyDaily from "../family-daily";
import FamilyInspiration from "../family-inspiration";

export type TypeName = keyof typeof COMPS;
interface Props {
  type: TypeName;
}

const COMPS = {
  family: Family,
  "family-daily": FamilyDaily,
  "family-inspiration": FamilyInspiration,
  mailbox: MailBox,
};

const TodoType: React.FC<Props> = ({ type }) => {
  const TypeComponent = COMPS[type];
  return <TypeComponent />;
};

export default TodoType;
