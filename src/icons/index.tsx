import React from 'react'

import { ReactComponent as MenuIcon } from './menu.svg'
import { ReactComponent as HomeIcon } from './home.svg'
import { ReactComponent as AddIcon} from './add.svg'
import { ReactComponent as EfficiencyIcon } from './efficiency.svg'
import { ReactComponent as QuestionIcon } from './question.svg'
import { ReactComponent as MessagesIcon } from './messages.svg'
import { ReactComponent as SearchIcon } from './search.svg'
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
  search: SearchIcon
};

const Icon: React.FC<IconProps> = ({ name, color = '#000000', size = 24, className }) => {
    const IconComponent = ICONS[name];

  return (
    <IconComponent width={size} height={size} color={color} className={className} />
  );
};

export default Icon
