import React, { useState, useEffect } from "react";
import { Todo, fetchTodoList } from "../../services/todo";
import useUserInfo from "../../hooks/useUserInfo";
import "./style.scss";
const Inbox = () => {
  const user = useUserInfo();
  const [showList, setShowList] = useState<Todo[]>();
  useEffect(() => {
    const uid = user?.sub!;
    if (uid) {
      fetchTodoList(uid).then((res) => {
        const list = res.filter((item) => item.type === "1");
        setShowList(list);
      });
    }
  }, [user]);

  return (
    <div className="inbox">
      <div className="inbox__content">
        <div>todo</div>
        <div>
          {showList?.map((item: Todo) => (
            <div>
              <div>{item.name}</div>
              <div>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
