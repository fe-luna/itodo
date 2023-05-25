import React from "react";
import { Project } from "../../services/project";
import Icon from "../../icons";
import "./style.scss";

interface Props {
  projectItem: Project;
}

const ProjectItem: React.FC<Props> = ({ projectItem }) => {
  return (
    <div className="project-item">
      <div className="project-item__content">
        <Icon name="projectcolor" />
        <div className="project-item__content-name">{projectItem.proName}</div>
      </div>
    </div>
  );
};

export default ProjectItem;
