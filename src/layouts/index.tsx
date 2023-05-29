import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import emitter from "../utils/emitter";
import header from "../pages/header";
import SideBar from "../pages/side-bar";
import Header from "../pages/header";
import "./style.scss";

const Layouts = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handler = () => {
    setIsShow((preState) => !preState);
  };
  useEffect(() => {
    emitter.on("setIsShow", handler);
    return () => emitter.off("setIsShow", handler);
  }, []);

  return (
    <div className="layouts">
      <Header />
      <div className="layouts__content">
        <SideBar isShow={isShow} />
        <div className="layouts__content-router">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layouts;
