
const initialState = {
       leftNavExpand:false,
       rolesSelectionData:[ ],
       agreementNoListInfo:[]
   
  };
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LEFT_NAV_EXPAND":
      return { ...state, isLeftNavExpanded:  action.payload};
      case "ROLES_SELECTION":
      return  {...state, rolesSelectionData:  action.payload};
      case "AGREEMENTNOS_ADDED":
      return {...state, agreementNoListInfo:  action.payload};
      case "SHOW_LOADER":
      return { ...state, showLoader:  action.payload};
      default:
        return state;
    }
  };
  export default rootReducer;