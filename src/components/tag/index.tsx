import React from "react";
import cx from "classnames";
import Icon, { IconName } from "../../icons";
import { THEME } from "../types";
import "./style.scss";

interface Props {
  tag: String;
  name: IconName;
  color?: THEME;
  iconClass?: String;
}
const Tag: React.FC<Props> = ({ tag, name, color = "default", iconClass }) => {
  return (
    <div className="tag">
      <div className="tag__icon">
        <Icon size="xsmall" name={name} color={color} className={iconClass} />
      </div>
      <div
        className={cx({
          [`tag__title--size`]: true,
          [`tag__title--color-${color}`]: color,
        })}
      >
        {tag}
      </div>
    </div>
  );
};

export default Tag;
