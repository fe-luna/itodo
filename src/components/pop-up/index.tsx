import React, { useRef, useEffect, RefObject } from "react";
import "./style.scss";
interface Props {
  children: any;
  className?: string;
}
const PopUp: React.FC<Props> = ({ children }) => {
  const popRef: RefObject<HTMLDivElement> = useRef(null);
  useEffect(() => {}, []);
  return (
    <div className="pop-up" ref={popRef}>
      {children}
    </div>
  );
};

export default PopUp;
