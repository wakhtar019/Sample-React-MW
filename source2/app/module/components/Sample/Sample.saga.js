import {call, put, apply, take} from 'redux-saga/effects';
import {InvokeUrl} from '../../../common/utility';
import {GET_USERS,setUsers, GET_REPOSITORY, setRepository} from './Sample.actions';

export function* getUsersSaga(){
    try {
        yield take(GET_USERS);
        const response = yield call(InvokeUrl,"https://api.github.com/users", "GET");
        const data = yield apply(response, response.json);
        yield put(setUsers(data));        
    } catch (error) {
        console.log("error: " + error);
    }
}

export function* getRepositorySaga(){
    try {
        const {searchTerm} = yield take(GET_REPOSITORY);
        const response = yield call(InvokeUrl,`https://api.github.com/repositories?q=${searchTerm}`, "GET");
        const data = yield apply(response, response.json);
        yield put(setRepository(data));        
    } catch (error) {
        console.log("error: " + error);
    }
}