
import {useState} from 'react'
import './style.scss'
function UserInfoPopup() {
    const [isPop, setIsPop] = useState(false)
    const handleClick = () => {
        setIsPop(true)
    }
    
    return (
        <div className="user-info" onClick={handleClick}>
                <img 
                    src="https://avatars.doist.com?fullName=Luna&amp;email=feluna.zhang%40gmail.com&amp;size=195&amp;bg=ffffff" 
                    alt="Luna"
                    className="user-info-img"
                >
                </img>
                {isPop && <div className="user-info-popup">popup</div>}
                
        </div>
    )
}
export default UserInfoPopup