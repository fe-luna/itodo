import React, { useState, forwardRef, ForwardRefRenderFunction } from "react";
import { useForm } from "react-hook-form";
import { createProject, Project } from "../../services/project";
import useUserInfo from "../../hooks/useUserInfo";
import "./style.scss";

interface Props {
  onClick?: () => void;
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
  if (!user) {
    return <div>loading</div>;
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
      <input defaultValue="test" {...register("name")} />
      <input {...register("subProject", { required: true })} />
    </form>
  );
};

export default forwardRef(AddProjectForm);
