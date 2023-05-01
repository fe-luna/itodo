
import './style.scss'
interface Props {
    type?: string;
    size?: number;
    disabled?: boolean;
    children?: any
}
const Button: React.FC<Props> = ({type="default", size = 24, disabled = false,children}) => {
    return (
        <button style={{width: size, height: size}} className={`${disabled ? "disabled": type}`} disabled={disabled}>{children}</button>
    )
}

export default Button