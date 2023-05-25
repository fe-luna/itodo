import React from "react";
import { Project } from "../../services/project";
import ProjectItem from "../project-item";
import "./style.scss";

interface Props {
  projectList?: Project[];
}

const DisplayProject: React.FC<Props> = ({ projectList }) => {
  return (
    <div className="display-project">
      {projectList?.map((project: Project) => (
        <ProjectItem key={project.id} projectItem={project} />
      ))}
    </div>
  );
};

export default DisplayProject;
