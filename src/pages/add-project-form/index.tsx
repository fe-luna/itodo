import React, {
  useState,
  useEffect,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import { useForm } from "react-hook-form";
import { createProject, Project } from "../../services/project";
import useUserInfo from "../../hooks/useUserInfo";
import "./style.scss";

interface Props {
  onClick: (isNameEmpty: boolean) => void;
}

const AddProjectForm: ForwardRefRenderFunction<HTMLFormElement, Props> = (
  props,
  ref
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user = useUserInfo();
  const onSubmit = (data: any) => {
    const uid = user?.sub!;
    const submitData = {
      uid,
      proName: data.name,
      subProject: data.subProject,
    };
    createProject(submitData).then(() => {
      console.log("###project successfully created");
    });
  };

  const [projectName, setProjectName] = useState<string>("");
  const handleProjectName = (e: any) => {
    setProjectName(e.target.value);
  };

  const [subProjectName, setSubProjectName] = useState<string>("");
  const handleSubProjectName = (e: any) => {
    setSubProjectName(e.target.value);
  };

  useEffect(() => {
    if (!projectName) {
      props.onClick(true);
    } else {
      props.onClick(false);
    }
  }, [projectName]);

  if (!user) {
    return <div>loading</div>;
  }
  return (
    <div className="add-project-form">
      <div className="add-project-form__header">添加项目</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={ref}
        className="add-project-form__fill"
      >
        <div className="add-project-form__project">
          <div className="add-project-form__project-title">名称</div>
          <div className=" add-project-form__input add-project-form__project-input">
            <input
              {...(register("name"), { required: true })}
              value={projectName}
              onChange={handleProjectName}
            />
          </div>
        </div>

        <div className="add-project-form__project">
          <div className="add-project-form__project-title">子项目</div>
          <div className=" add-project-form__input add-project-form__sub-project-input">
            <input
              {...register("subProject")}
              value={subProjectName}
              onChange={handleSubProjectName}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default forwardRef(AddProjectForm);
