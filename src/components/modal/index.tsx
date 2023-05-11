import React, { useEffect, useRef, RefObject, MouseEvent } from "react";
import "./style.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOk?: () => void;
  children?: any;
}
const Modal: React.FC<Props> = ({ isOpen, onClose, onOk, children }) => {
  const modalRef: RefObject<HTMLDivElement> = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (!modalRef.current || modalRef.current.contains(event.target)) {
        return;
      }
      onClose();
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal" ref={modalRef}>
      <div className="modal--content">{children}</div>
      <button onClick={onOk}>添加任务</button>
      <button onClick={onClose}>取消</button>
    </div>
  );
};

export default Modal;
