import cx from "classnames";
import "./style.scss";
interface Props {
  type?: "default" | "primary" | "dashed" | "text";
  size?: "small" | "middle" | "large";
  disabled?: boolean;
  children?: any;
  style?: any;
}
const Button: React.FC<Props> = ({
  type = "default",
  size = "middle",
  disabled = false,
  children,
  style,
}) => {
  return (
    <button
      className={cx({
        [`button--type-${type}`]: type,
        [`button--size-${size}`]: size,
      })}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
