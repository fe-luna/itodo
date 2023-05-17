import React, { useEffect, useRef, RefObject } from "react";
import cx from "classnames";
import "./style.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOk?: () => void;
  children?: any;
  okText?: string;
  cancelText?: string;
  footerLeft?: any;
  isNameEmpty?: boolean;
}
const Modal: React.FC<Props> = ({
  isOpen,
  onClose,
  onOk,
  children,
  okText = "完成",
  cancelText = "取消",
  footerLeft,
  isNameEmpty,
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

  const onOkClass = isNameEmpty
    ? "modal__footer-buttons--state-ok-empty"
    : "modal__footer-buttons--state-ok";

  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal" ref={modalRef}>
      <div className="modal__content">{children}</div>
      <div className="modal__footer">
        <div className="modal__footer-left">{footerLeft}</div>
        <div className="modal__footer-buttons">
          <button
            onClick={onClose}
            className={cx({
              [`modal__footer-buttons`]: true,
              [`modal__footer-buttons--state-cancel`]: true,
            })}
          >
            {cancelText}
          </button>
          <button
            onClick={onOk}
            className={cx({
              [`modal__footer-buttons`]: true,
              [`modal__footer-buttons--state-ok-empty`]: isNameEmpty,
              [`modal__footer-buttons--state-ok`]: !isNameEmpty,
            })}
            disabled={isNameEmpty}
          >
            {okText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
