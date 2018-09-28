import { AuthenticationContext} from 'react-adal'; 
export const adalConfig = {
    tenant: 'microsoft.onmicrosoft.com',
    clientId: '41d13c02-7c82-4319-9b5b-9ab05db55d15',
    endpoints: {
        api: '14d71d65-f596-4eae-be30-27f079bf8d4b',
       'https://graph.windows.net/':'https://graph.windows.net/'
    },
    cacheLocation: 'localStorage',
};
 
export const authContext = new AuthenticationContext(adalConfig);

export const adalHelper ={

    login(){
        authContext.login();
    },
    logout(){
        authContext.logout();
    },
    handleWindowCallback(){ 
        authContext.handleWindowCallback();
    },
    userInfo(){   
        return authContext.getCachedUser();
    },

    accessToken() {
        return authContext.getCachedToken(adalConfig.clientId);
    },
    accessTokenByid(id) {
        return authContext.getCachedToken(id);
    },

    isAuthenticated() {
        return (this.accessToken()!=null) && (this.userInfo()!=null);
    }
}
 

        


