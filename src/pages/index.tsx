import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import SignIn from "./signin";
import "./style.scss";
function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
