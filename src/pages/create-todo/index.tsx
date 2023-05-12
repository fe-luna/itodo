import { useState, useRef } from "react";
import { createTodo } from "../../services/todo";
import useUserInfo from "../../hooks/useUserInfo";
import Modal from "../../components/modal";
import Icon from "../../icons";
import "./style.scss";
function CreateTodo() {
  const user = useUserInfo();
  const formRef = useRef<HTMLFormElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleModalOpen = () => {
    console.log("## handleModalOpen");
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };
  const handleModalOk = () => {
    formRef.current?.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
  };
  function handleCreateTodo(event: any) {
    event.preventDefault();
    const uid = user?.sub!;
    const form = new FormData(event.target);
    console.log("###", form);
    const data = {
      uid,
      name: form.get("name"),
      description: form.get("description"),
    };
    createTodo(data).then(() => {
      event.target.reset();
    });
    console.log("##create note");
  }

  return (
    <div className="createTodo">
      <Icon name="add" color="primary" onClick={handleModalOpen} />
      <Modal
        isOpen={isOpen}
        onClose={handleModalClose}
        onOk={handleModalOk}
        okText="添加任务"
        cancelText="取消"
      >
        <div className="createTodo">
          <form ref={formRef} onSubmit={handleCreateTodo}>
            <label>Todo Name</label>
            <input type="text" name="name" placeholder="Todo Name" />
            <label>Note Description</label>
            <input
              type="text"
              name="description"
              placeholder="Note Description"
            />
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default CreateTodo;
