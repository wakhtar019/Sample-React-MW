import { makeActionCreator } from '../../../common/utility';

export const GET_USERS ="module/components/sample/GET_USERS";
export const getUsers = makeActionCreator(GET_USERS,false,"");

export const SET_USERS ="module/components/sample/SET_USERS";
export const setUsers = makeActionCreator(SET_USERS,false,"");

export const GET_REPOSITORY ="module/components/sample/GET_REPOSITORY";
export const getRepository = makeActionCreator(GET_REPOSITORY,false,"searchTerm");

export const SET_REPOSITORY ="module/components/sample/SET_REPOSITORY";
export const setRepository = makeActionCreator(SET_REPOSITORY,false,"repos");

//this is a sample Action. We are using a wrapper to create action instead of this 
// export const getUsers = () => ({type: GET_USERS});
// export const setUsers = (users) => ({type: GET_USERS, users: users});

// export const getRepository = (searchTerm) => ({type: GET_USERS, searchTerm: searchTerm});
// export const setRepository = (repos) => ({type: GET_USERS, repos: repos});

// export function getUsers(searchString) {
//     return {
//         type: GET_USERS,
//         searchString: searchString
//     }
// }