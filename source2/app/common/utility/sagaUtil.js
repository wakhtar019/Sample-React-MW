import { call } from "redux-saga/effects";
import { fetchUtil } from './fetchUtil'
//import { incrementPendingAPICalls, decrementPendingAPICalls } from "../actions";
import cache from 'memory-cache';

let mCache = new cache.Cache();

export function* InvokeUrl(url, method, data,config) {

   
    //yield put(incrementPendingAPICalls());

    var reqHeaders =  {
        'Content-Type': 'application/json',
        'Accept': 'application/json',//,
        'Source':'UI'
     //   'Authorization': `Bearer ${accessToken}`
    };

    if(config != null && config !== undefined)
    {
        reqHeaders= Object.assign( reqHeaders,config);
    }

    const { response, error } = yield call(fetchUtil, url, {
        method: method,
        headers:reqHeaders,
        body: data,
        credentials: 'same-origin'
    });
    //yield put(decrementPendingAPICalls());



    return response ? response : error;
}

export function* InvokeCachedUrl(url, method, data) {

    let cachedResponse = mCache.get(url);

    if (cachedResponse) {
        return cachedResponse;
    } else {

        var responseC = yield call(InvokeUrl, url, method, data);
         mCache.put(url, responseC, 5000 * 1000);
        return responseC;
    }
}
