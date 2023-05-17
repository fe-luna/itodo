import React from "react";
import cx from "classnames";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";
import { ReactComponent as HomeIcon } from "./assets/home.svg";
import { ReactComponent as AddIcon } from "./assets/add.svg";
import { ReactComponent as EfficiencyIcon } from "./assets/efficiency.svg";
import { ReactComponent as QuestionIcon } from "./assets/question.svg";
import { ReactComponent as MessagesIcon } from "./assets/messages.svg";
import { ReactComponent as SearchIcon } from "./assets/search.svg";
import { ReactComponent as SettingIcon } from "./assets/setting.svg";
import { ReactComponent as ThemeIcon } from "./assets/theme.svg";
import { ReactComponent as ActivityIcon } from "./assets/avtivitylog.svg";
import { ReactComponent as PrintIcon } from "./assets/print.svg";
import { ReactComponent as RelateIcon } from "./assets/relateapp.svg";
import { ReactComponent as StarIcon } from "./assets/star.svg";
import { ReactComponent as UpgradeIcon } from "./assets/theme.svg";
import { ReactComponent as DownloadIcon } from "./assets/downapp.svg";
import { ReactComponent as SignoutIcon } from "./assets/signout.svg";
import { ReactComponent as CheckMark } from "./assets/checkmark.svg";
import { ReactComponent as MoreIcon } from "./assets/more.svg";
import { ReactComponent as PriorityIcon } from "./assets/priority.svg";
import { ReactComponent as TodayIcon } from "./assets/today.svg";
import { ReactComponent as MailBox } from "./assets/mailBox.svg";
import { ReactComponent as DownArrow } from "./assets/downArrow.svg";
import { THEME } from "../components/types";
import "./style.scss";

export type IconName = keyof typeof ICONS;

// Import additional icon files here
interface IconProps {
  name: IconName;
  color?: THEME;
  size?: "xsmall" | "small" | "middle" | "big";
  className?: String;
  onClick?: () => void;
}

const ICONS = {
  menu: MenuIcon,
  home: HomeIcon,
  add: AddIcon,
  efficiency: EfficiencyIcon,
  question: QuestionIcon,
  messages: MessagesIcon,
  search: SearchIcon,
  setting: SettingIcon,
  theme: ThemeIcon,
  activity: ActivityIcon,
  print: PrintIcon,
  relate: RelateIcon,
  star: StarIcon,
  upgrade: UpgradeIcon,
  download: DownloadIcon,
  signout: SignoutIcon,
  check: CheckMark,
  today: TodayIcon,
  priority: PriorityIcon,
  more: MoreIcon,
  mailbox: MailBox,
  downarrow: DownArrow,
};

const Icon: React.FC<IconProps> = ({
  name,
  color = "default",
  size = "small",
  className,
  onClick,
}) => {
  const IconComponent = ICONS[name];

  return (
    <IconComponent
      className={cx("icon--layout", {
        [`icon--size-${size}`]: size,
        [`icon--color-${color}`]: color,
        [`${className}`]: className,
      })}
      onClick={onClick}
    />
  );
};

export default Icon;
