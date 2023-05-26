import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import DisplayTodoGroup from "./display-todo-group";
import "./style.scss";
function Pages() {
  return (
    <div className="pages">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Pages;
