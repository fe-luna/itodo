import { useState, useEffect, useRef } from "react";
import Icon from "../../icons";
import Modal from "../../components/modal";
import AddProjectForm from "../add-project-form";
import useUserInfo from "../../hooks/useUserInfo";
import { fetchProjectList, Project } from "../../services/project";
import DisplayProject from "../display-project";
import "./style.scss";

const AddProject = () => {
  const user = useUserInfo();
  const [projectList, setProjectList] = useState<Project[]>();
  useEffect(() => {
    const uid = user?.sub!;
    if (!user) {
      fetchProjectList(uid).then((res) => {
        setProjectList(res);
        console.log("###project list is ", res);
      });
    }
  }, [user]);

  const formRef = useRef<HTMLFormElement>(null);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleModalOk = () => {
    formRef.current?.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
    setIsModalOpen(false);
  };
  const handleAddProject = () => {
    setIsModalOpen(true);
  };

  const [isProjectShow, setIsProjectShow] = useState<boolean>(false);
  const handleShowProjectList = () => {
    setIsProjectShow(true);
  };

  const [isNameEmpty, setIsNameEmpty] = useState<boolean>(true);

  return (
    <div className="add-project">
      <div className="add-project__summary">
        <div className="add-project__contents">
          <div className="add-project__contents-title">项目</div>
          <div className="add-project__contents-icon">
            <Icon
              name="add"
              size="xsmall"
              className="add-project__contents-icon-add"
              onClick={handleAddProject}
            />
            <Icon
              name="dropdown"
              size="xsmall"
              className="add-project__contents-icon-dropdown"
              onClick={handleShowProjectList}
            />
          </div>
        </div>
      </div>

      {isProjectShow && <DisplayProject projectList={projectList} />}

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onOk={handleModalOk}
        isNameEmpty={isNameEmpty}
        bodyStyle="add-project__modal"
      >
        <AddProjectForm ref={formRef} onClick={setIsNameEmpty} />
      </Modal>
    </div>
  );
};

export default AddProject;
