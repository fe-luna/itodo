import { createTodo } from "../../services/todo";
import useUserInfo from "../../hooks/useUserInfo";
import "./style.scss";
function CreateTodo() {
  const user = useUserInfo();
  async function handleCreateTodo(event: any) {
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
    console.log("##create note");
  }
  return (
    <div className="createTodo">
      <form onSubmit={handleCreateTodo}>
        <label>Todo Name</label>
        <input type="text" name="name" placeholder="Todo Name" />
        <label>Note Description</label>
        <input type="text" name="description" placeholder="Note Description" />
        <button type="submit">Create Todo</button>
      </form>
    </div>
  );
}

export default CreateTodo;
