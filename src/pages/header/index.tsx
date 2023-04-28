
import { useState }  from 'react'
import {
    withAuthenticator,
  } from "@aws-amplify/ui-react";
import Icon from '../../icons'
import Sign from '../signin'
import SearchBox from '../../components/search-box'
import './style.scss'

function Header() {
    const [searchQuery, setSearchQuery] = useState('')
    const onSearchQueryChange = (e: any) => {
        setSearchQuery(e.target.value)
    }
    return (
        <div className="header">
            <div className="header-left">
                <Icon name="menu" color="white"/>
                <Icon name="home" color="white"/>
                <SearchBox searchQuery={searchQuery} onSearchQueryChange={onSearchQueryChange}/>
            </div>
            <div className="header-right">
                <Icon name="add" color="white" />
                <Icon name="efficiency" color="white" />
                <Icon name="question" color="white" />
                <Icon name="messages" color="white" />
                <Sign />  
            </div>
             
        </div>
    )
}
export default withAuthenticator(Header)