import React, { useEffect, useRef, RefObject } from "react";
import "./style.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOk?: () => void;
  children?: any;
  okText?: string;
  cancelText?: string;
}
const Modal: React.FC<Props> = ({
  isOpen,
  onClose,
  onOk,
  children,
  okText = "完成",
  cancelText = "取消",
}) => {
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
      <button onClick={onOk}>{okText}</button>
      <button onClick={onClose}>{cancelText}</button>
    </div>
  );
};

export default Modal;
