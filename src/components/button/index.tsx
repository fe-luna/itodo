import cx from "classnames";
import "./style.scss";
interface Props {
  type?: "default" | "primary" | "dashed" | "text";
  size?: "small" | "middle" | "large";
  disabled?: boolean;
  children?: any;
}
const Button: React.FC<Props> = ({
  type = "default",
  size = "middle",
  disabled = false,
  children,
}) => {
  return (
    <button
      className={cx({
        [`button--type-${type}`]: type,
        [`button--size-${size}`]: size,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
