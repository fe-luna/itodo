import React from 'react'

import { ReactComponent as MenuIcon } from './assets/menu.svg'
import { ReactComponent as HomeIcon } from './assets/home.svg'
import { ReactComponent as AddIcon} from './assets/add.svg'
import { ReactComponent as EfficiencyIcon } from './assets/efficiency.svg'
import { ReactComponent as QuestionIcon } from './assets/question.svg'
import { ReactComponent as MessagesIcon } from './assets/messages.svg'
import { ReactComponent as SearchIcon } from './assets/search.svg'
import { ReactComponent as SettingIcon } from './assets/setting.svg'
import { ReactComponent as ThemeIcon } from './assets/theme.svg'
import { ReactComponent as ActivityIcon } from './assets/avtivitylog.svg'
import { ReactComponent as PrintIcon } from './assets/print.svg'
import { ReactComponent as RelateIcon } from './assets/relateapp.svg'
import { ReactComponent as StarIcon } from './assets/star.svg'
import { ReactComponent as UpgradeIcon } from './assets/theme.svg'
import { ReactComponent as DownloadIcon } from './assets/downapp.svg'
import { ReactComponent as SignoutIcon } from './assets/signout.svg'
// Import additional icon files here
interface IconProps {
  name: keyof typeof ICONS
  color?: string
  size?: number
  className?: string
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
  signout: SignoutIcon
};

const Icon: React.FC<IconProps> = ({ name, color = '#000000', size = 24, className }) => {
    const IconComponent = ICONS[name];

  return (
    <IconComponent width={size} height={size} color={color} className={className} />
  );
};

export default Icon
