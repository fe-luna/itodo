
import React, {useState} from 'react'
import Icon from '../../icons'
import PopUp from './pop-up'
import './style.scss'

interface Props {
    searchQuery: string,
    onSearchQueryChange: (e: any) => void
}

const SearchBox:  React.FC<Props> = ({ searchQuery, onSearchQueryChange } ) => {
  const [isFocus, setIsFocus] = useState(false)
  const handleFocus = () => {
    setIsFocus(true)
  }
  const handleNoFocus = () => {
    setIsFocus(false)
  }
  const [isHover, setIsHover] = useState(false)
  const handleMouseHover = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }
  const color = isHover || isFocus ? "grey" : "white"
  return (
    <div className={`${isFocus ? "search-box-focus" : "search-box"}`} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave}>
      <Icon name="search" color={color} className="search-icon" />
      <input
        type="text"
        value={searchQuery}
        onChange={onSearchQueryChange}
        placeholder="搜索"
        className={`${isFocus ? "search-input-focus" : "search-input"}`}
        onFocus={handleFocus}
        onBlur={handleNoFocus}
      />
      {isFocus ? <Icon name="question" color="grey" className="search-question"/> : <span></span>}
      {isFocus ? <PopUp /> : <div></div>}
    </div>
  )
}

export default SearchBox;
