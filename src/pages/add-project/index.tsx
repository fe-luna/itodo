import Icon from "../../icons";
import "./style.scss";
const AddProject = () => {
  return (
    <div className="add-project">
      <div className="add-project__contents">
        <div className="add-project__contents-title">项目</div>
        <div className="add-project__contents-icon">
          <Icon
            name="add"
            size="xsmall"
            className="add-project__contents-icon-add"
          />
          <Icon
            name="dropdown"
            size="xsmall"
            className="add-project__contents-icon-dropdown"
          />
        </div>
      </div>
    </div>
  );
};

export default AddProject;
