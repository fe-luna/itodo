import React, { useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Icon from "../../icons";
import SearchBox from "../../components/search-box";
import CreateTodo from "../create-todo";
import emitter from "../../utils/emitter";
import "./style.scss";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onSearchQueryChange = (e: any) => {
    setSearchQuery(e.target.value);
  };
  const handleMenuShow = () => {
    emitter.emit("setIsShow");
  };

  return (
    <div className="header">
      <div className="header-left">
        <Icon name="menu" color="primary" onClick={handleMenuShow} />
        <Icon name="home" color="primary" />
        <SearchBox
          searchQuery={searchQuery}
          onSearchQueryChange={onSearchQueryChange}
        />
      </div>
      <div className="header-right">
        <CreateTodo />
        <Icon name="efficiency" color="primary" />
        <Icon name="question" color="primary" />
        <Icon name="messages" color="primary" />
      </div>
    </div>
  );
};
export default withAuthenticator(Header);
