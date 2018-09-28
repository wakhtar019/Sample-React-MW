
export const msLiveHelper ={

login(clientId, responseType, redirectUri, resposeMode, scope) {
    sessionStorage['redirectUrl']=window.location.href;
    localStorage['auth'] = 'msa';
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    console.log(`https://login.live.com/oauth20_authorize.srf?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&response_mode=${resposeMode}&scope=${scope}`);
    clientId='a87e7347-5cb7-49ae-8810-7251832af3db';
    window.location.href = `https://login.live.com/oauth20_authorize.srf?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&response_mode=${resposeMode}&scope=${scope}`;
}
 ,handleWindowCallback(){ 
        this.getFragment(); 
        if(window.location.href.indexOf("access_token")>-1)
            window.location.assign(this.getRedirectUrl());
 }, 
 getRedirectUrl(){
    let redirectUrl=sessionStorage['redirectUrl'];
    sessionStorage.removeItem('redirectUrl'); 
    return redirectUrl&&redirectUrl.indexOf('/login')==-1?redirectUrl:'/dashboard';
 },
 getFragment() {
        let fragment={};
        if (window.location.hash.indexOf("#") === 0) {
            fragment = this.parseQueryString(window.location.hash.substr(1));
            localStorage['access_token']=fragment['access_token'];
            localStorage['user_id']=fragment['user_id'];
            localStorage['authentication_token']=fragment['authentication_token'];
            localStorage['expires_in']=fragment['expires_in'];
            localStorage['scope']=fragment['scope'];
            localStorage['token_type']=fragment['token_type'];
            localStorage['msa.error']=fragment['error'];
            localStorage['msa.error_description']=fragment['error_description'];
        }  
        return fragment;
    },
    
    parseQueryString(queryString) {
        console.log("queryString...",queryString);
        var data = {},
            pairs, pair, separatorIndex, escapedKey, escapedValue, key, value;

        if (queryString === null) {
            return data;
        } 
        pairs = queryString.split("&"); 
        for (var i = 0; i < pairs.length; i++) {
            pair = pairs[i];
            separatorIndex = pair.indexOf("="); 
            if (separatorIndex === -1) {
                escapedKey = pair;
                escapedValue = null;
            } else {
                escapedKey = pair.substr(0, separatorIndex);
                escapedValue = pair.substr(separatorIndex + 1);
            }

            key = decodeURIComponent(escapedKey);
            value = decodeURIComponent(escapedValue); 
            data[key] = value;
        } 
        return data;
    },
    accessToken() {
        return localStorage['access_token'];
    },
    userInfo(){
        return localStorage['user_id'];
    },
    isAuthenticated(){
        return (this.accessToken()!=null) && (this.userInfo()!=null);
    }
    




}

