import { useEffect, useState, useRef } from "react";
import emitter from "../../utils/emitter";
import { createTodo } from "../../services/todo";
import useUserInfo from "../../hooks/useUserInfo";
import Modal from "../../components/modal";
import Icon from "../../icons";
import Tag from "../../components/tag";
import MailBox from "../mailbox";
import "./style.scss";
function CreateTodo() {
  const formRef = useRef<HTMLFormElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const handleModalOpen = () => {
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };
  const handleModalOk = () => {
    formRef.current?.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
    setIsOpen(false);
    emitter.emit("");
  };

  const user = useUserInfo();
  const [nameValue, setNameValue] = useState<string>();
  const [isNameEmpty, setIsNameEmpty] = useState<boolean>(true);
  const handleNameChange = (e: any) => {
    setNameValue(e.target.value);
  };
  useEffect(() => {
    if (nameValue) {
      setIsNameEmpty(false);
    } else {
      setIsNameEmpty(true);
    }
  }, [nameValue]);

  const [descValue, setDescValue] = useState<string>();
  const handleDescChange = (e: any) => {
    setDescValue(e.target.value);
  };

  function handleCreateTodo(event: any) {
    event.preventDefault();
    const uid = user?.sub!;
    const currentTime = new Date();
    const form = new FormData(event.target);

    const data = {
      uid,
      todoName: form.get("name"),
      type: form.get("type"),
      subType: form.get("subtype"),
      description: form.get("description"),
      dueDate: currentTime.toISOString(),
    };
    createTodo(data).then(() => {
      setNameValue("");
      setDescValue("");
    });
  }

  return (
    <div className="create-todo">
      <Icon name="add" color="primary" onClick={handleModalOpen} />
      <Modal
        isOpen={isOpen}
        onClose={handleModalClose}
        onOk={handleModalOk}
        okText="添加任务"
        cancelText="取消"
        footerLeft={<MailBox />}
        isNameEmpty={isNameEmpty}
      >
        <div className="create-todo__modal-area">
          <div className="create-todo__form">
            <form ref={formRef} onSubmit={handleCreateTodo}>
              <div className="create-todo__form-name">
                <input
                  type="text"
                  name="name"
                  placeholder="任务名称"
                  value={nameValue}
                  onChange={handleNameChange}
                  autoFocus={isOpen}
                />
              </div>
              <div className="create-todo__form-desc">
                <input
                  type="text"
                  name="description"
                  placeholder="描述"
                  value={descValue}
                  onChange={handleDescChange}
                />
              </div>
              <input name="type" type="select" />
            </form>
          </div>
          <div className="create-todo__form-tag">
            <Tag tag="今天" name="today" color="green" iconClass="" />
            <Tag tag="优先级" name="priority" />
            <Tag tag="" name="more" iconClass="create-todo__form-tag-more" />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CreateTodo;
