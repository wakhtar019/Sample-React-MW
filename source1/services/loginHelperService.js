import {adalHelper} from './adalHelperService';
import {msLiveHelper} from './msLiveHelper';

export const loginHelper={

    login(type){ 
        localStorage["authType"]=type;
        if(type==='aad'){
            adalHelper.login();
        } else{
            msLiveHelper.login('a87e7347-5cb7-49ae-8810-7251832af3db','token','http://localhost:3000','fragment','user.read');
        }
    },
    logout(){
        if(localStorage["authType"]==='aad'){
            adalHelper.logout();
        }
    },
    handleWindowCallback(){  
        if(localStorage["authType"]==='aad'){
            adalHelper.handleWindowCallback(); 
        }
        else if(localStorage["authType"]==='msa'){
             msLiveHelper.handleWindowCallback(); 
        } 
        console.log('------>'); 
        console.log(window.location.href); 
    },
    userInfo(){   
        let user;
        if(localStorage["authType"]==='aad'){
            user= adalHelper.userInfo(); 
        }  
        return user; 
    },

    accessToken() { 
        let token;
        if(localStorage["authType"]==='aad'){
            token= adalHelper.accessToken(); 
        }  
        return token;
    },
    accessTokenByid(id) {   
      return adalHelper.accessTokenByid(id);  
    },
    isAuthenticated() {
        let isAuth;
        if(localStorage["authType"]==='aad'){
            isAuth = adalHelper.isAuthenticated(); 
        } 
        else if(localStorage["authType"]==='msa'){
            isAuth = msLiveHelper.isAuthenticated(); 
        }
        return isAuth;
    }
}