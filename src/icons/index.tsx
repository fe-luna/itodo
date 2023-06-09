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
import { ReactComponent as Comment } from "./assets/comment.svg";
import { ReactComponent as Expiration } from "./assets/expiration.svg";
import { ReactComponent as Edit } from "./assets/edit.svg";
import { ReactComponent as House } from "./assets/house.svg";
import { ReactComponent as Daily } from "./assets/daily.svg";
import { ReactComponent as Inspiration } from "./assets/inspiration.svg";
import { ReactComponent as DropDown } from "./assets/dropDown.svg";
import { ReactComponent as ProjectColor } from "./assets/projectColor.svg";
import { ReactComponent as Preview } from "./assets/preview.svg";
import { ReactComponent as FilterTag } from "./assets/filter&tag.svg";
import Calendar from "../pages/calendar";

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
  comment: Comment,
  edit: Edit,
  expiration: Expiration,
  house: House,
  daily: Daily,
  inspiration: Inspiration,
  dropdown: DropDown,
  projectcolor: ProjectColor,
  calendar: Calendar,
  preview: Preview,
  filtertag: FilterTag,
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
