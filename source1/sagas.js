import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'
import {reciveUserData,getUserData, GET_API_DATA,Re, RECEIVE_API_DATA} from './actions/action'
import {fetchUsers} from './api'

// this is a placeholder content for reference nothing is usefull

function* addArticleAsync() {
  yield delay(1000)
  yield put({ type: 'ADD_ARTICLE' })
}


function* watchAddArticleAsync() {
  yield takeEvery('ADDARTICLE_ASYNC', addArticleAsync)
}

function* getUsersAsync(action) {
  try{
   
    const data=yield call( fetchUsers);
    console.log('api data',data);
    yield delay(1000)
    yield put(reciveUserData(data))
  }catch(e){
    console.log('error in fetch data in saga',e);
  }
}
  
  
  function* watchGetUsersAsync() {
    yield takeEvery(GET_API_DATA, getUsersAsync)
  }


export default function* rootSaga() {
    yield all([
      watchAddArticleAsync(),
      watchGetUsersAsync()
    ])
  }