import React from "react";
import "./style.scss";

interface Item {
  id: string;
  label: string;
  comp: any;
  length: number;
  path: string;
}
interface Props {
  items: Item[];
}

const Menu: React.FC<Props> = ({ items }) => {
  const handleRouteChange = (path: string) => {
    console.log("###path", path);
  };
  return (
    <div className="Menu">
      {items.map((item: Item) => {
        return (
          <div
            key={item.id}
            className="Menu__content"
            onClick={handleRouteChange.bind(null, item.path)}
          >
            <div className="Menu__content-desc">
              <div className="Menu__content-desc-icon">{item.comp}</div>
              <div className="Menu__content-desc-label">{item.label}</div>
            </div>
            <div className="Menu__content-length">
              {item.length > 0 ? item.length : ""}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
