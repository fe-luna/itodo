import React, { useEffect, useState } from "react";
import { Project, fetchProjectList } from "../../services/project";
import useUserInfo from "../../hooks/useUserInfo";
const TypeList = () => {
  const user = useUserInfo();
  const [projectList, setProjectList] = useState<Project[]>();
  useEffect(() => {
    if (user) {
      const uid = user?.sub!;
      fetchProjectList(uid).then((res) => {
        setProjectList(res);
      });
    }
  }, [user]);
  if (!projectList) {
    return null;
  }

  return (
    <div className="type-list">
      <div className="">
        {projectList.map((project: Project) => (
          <div>{project.proName}</div>
        ))}
      </div>
    </div>
  );
};

export default TypeList;
