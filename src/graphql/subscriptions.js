/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      uid
      todoName
      type
      subType
      description
      dueDate
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      uid
      todoName
      type
      subType
      description
      dueDate
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      uid
      todoName
      type
      subType
      description
      dueDate
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
      id
      uid
      proName
      subProject
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
      id
      uid
      proName
      subProject
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
      id
      uid
      proName
      subProject
      createdAt
      updatedAt
    }
  }
`;
