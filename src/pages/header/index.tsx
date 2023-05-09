import { useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Icon from "../../icons";
import SearchBox from "../../components/search-box";
import "./style.scss";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const onSearchQueryChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="header">
      <div className="header-left">
        <Icon name="menu" color="primary" />
        <Icon name="home" color="primary" />
        <SearchBox
          searchQuery={searchQuery}
          onSearchQueryChange={onSearchQueryChange}
        />
      </div>
      <div className="header-right">
        <Icon name="add" color="primary" />
        <Icon name="efficiency" color="primary" />
        <Icon name="question" color="primary" />
        <Icon name="messages" color="primary" />
      </div>
    </div>
  );
}
export default withAuthenticator(Header);
