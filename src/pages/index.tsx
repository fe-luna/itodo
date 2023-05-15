import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import "./style.scss";
function Pages() {
  return (
    <div className="pages">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Pages;
