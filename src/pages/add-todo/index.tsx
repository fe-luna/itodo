import { useEffect, useState, useRef } from "react";
import { createTodo } from "../../services/todo";
import useUserInfo from "../../hooks/useUserInfo";
import Tag from "../../components/tag";
import MailBox from "../mailbox";
import "./style.scss";
function AddTodo() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleOk = () => {
    formRef.current?.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
  };

  const user = useUserInfo();
  function handleCreateTodo(event: any) {
    event.preventDefault();
    const uid = user?.sub!;
    const form = new FormData(event.target);
    const data = {
      uid,
      name: form.get("name"),
      description: form.get("description"),
    };
    createTodo(data).then(() => {
      event.target.reset();
    });
  }

  const [nameValue, setNameValue] = useState();
  const [isNameEmpty, setIsNameEmpty] = useState(true);
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

  const [descValue, setDescValue] = useState();
  const handleDescChange = (e: any) => {
    setDescValue(e.target.value);
  };

  return (
    <div className="create-todo">
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
          </form>
        </div>
        <div>
          <MailBox />
        </div>
        <div className="create-todo__form-tag">
          <Tag tag="今天" name="today" color="green" iconClass="" />
          <Tag tag="优先级" name="priority" />
          <Tag tag="" name="more" iconClass="create-todo__form-tag-more" />
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
