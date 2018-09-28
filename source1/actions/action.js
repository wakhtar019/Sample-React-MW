export const addArticle = article => (
    { type: "ADD_ARTICLE", payload: article }
);
export const addBook = book => (
    { type: "ADD_BOOKS", payload: book }
);
export const updateUsers = items => (
    { type: "UPDATE_USERS", payload: items }
);
export const GET_API_DATA="GET_API_DATA";
export const RECEIVE_API_DATA="RECEIVE_API_DATA";
export const getUserData =() => (
    { type: "GET_API_DATA" }
);
export const reciveUserData = data => (
    { type: "RECEIVE_API_DATA", data }
);
export const leftNavExpand = data => (
    { type: "LEFT_NAV_EXPAND",  payload: data }
);
export const rolesSelection= data =>(
    {
        type:"ROLES_SELECTION",payload:data
    }
);
export const agreementNosAdded= data =>(
    {
        type:"AGREEMENTNOS_ADDED",payload:data
    }
);

export const showLoader = data => (
    { type: "SHOW_LOADER",  payload: data }
);