import {
  createProject as createProjectMutation,
  deleteProject as deleteProjectMutation,
  updateProject as updateProjectMutation,
} from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { listProjects } from "../graphql/queries";

export interface Project {
  id: any;
  uid: string;
  proName: string;
  subProject: string[];
}

export async function fetchProjectList(uid: string): Promise<Project[]> {
  const filter = {
    uid: {
      eq: uid,
    },
  };
  const query = graphqlOperation(listProjects, { filter });
  const apiData = await API.graphql(query);
  //@ts-ignore
  const projectFromAPI = apiData.data.listProjects.items;
  return projectFromAPI;
}

export async function createProject(data: any) {
  await API.graphql({
    query: createProjectMutation,
    variables: { input: data },
  });
}

export async function deleteProject(id: String) {
  const deletedProject = await API.graphql({
    query: deleteProjectMutation,
    variables: {
      input: {
        id,
      },
    },
  });
}

export async function updateProject(data: any) {
  const result = await API.graphql(
    graphqlOperation(updateProjectMutation, { input: data })
  );
}
