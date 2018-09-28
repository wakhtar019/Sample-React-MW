
import {createReducer} from '../../../common/utility';
import {SET_USERS,SET_REPOSITORY} from './Sample.actions'
import {fromJS} from 'immutable';

export const sampleReducer = createReducer(null,{ 
  [SET_USERS](state,{users}){
    return fromJS(users);
  },
  [SET_REPOSITORY](state,{repos}){
    return fromJS(repos);
  }
});

//this is a sample reducer. We are using a wrapper to create reucer instead of this 
// function sampleReducer(state = initialState, action) {
//     switch (action.type) {
//       case SET_USERS:
//         return fromJS(action.users)
//       case SET_REPOSITORY:
//         return fromJS(action.repos)
//       default:
//         return state
//     }
//   }