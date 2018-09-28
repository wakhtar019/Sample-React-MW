import React,{dispatch} from 'react';
import { connect } from "react-redux";
import {leftNavExpand} from '../../actions/action';
import {Link} from 'react-router-dom'
import { authContext } from '../../services/adalHelperService';
import {showLoader} from '../../actions/action';
import {UUMLogger} from '../../appInsights';

class LeftNav extends React.Component{
     constructor(props){
        super(props);
        this.toogleLeftNav =  this.toogleLeftNav.bind(this);
        this.state={leftNavExpand:false}
        this.getUserThumbnail();
     }

     getUserThumbnail = () => {
        var self = this;
        authContext.acquireToken('https://graph.windows.net', function (error, token) {
            var opts = {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }; 
            var url = "https://graph.windows.net/me/thumbnailPhoto?api-version=1.6";
            //var url ='https://graph.windows.net/myorganization/users/sunayak@microsoft.com/thumbnailPhoto?api-version=1.6';

            var request = new Request(url);

            fetch(request, opts).then(self.handleErrors)
                .then((response) => {
                response.arrayBuffer().then((buffer) => {
                    var base64Flag = 'data:image/jpeg;base64,';
                    var imageStr = self.arrayBufferToBase64(buffer);
                    self.setState({ profileImg: base64Flag + imageStr })
                })
            }).catch((error)=>{
                self.setState({ profileImg:''});              
                UUMLogger.logError('UUM.LeftNav',error.message,'404',error.stack)
            });
        })
    }

    handleErrors=(response)=> {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response;
    }
    arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }

     toogleLeftNav=()=>{
        this.setState({leftNavExpand:!this.state.leftNavExpand});
        
        
    this.props.updateLeftNav(!this.state.leftNavExpand);

     }
    render(){
        const isProfileImg=(this.state.profileImg!=null &&  this.state.profileImg.trim() !== "");
    return (
        <div id="left-container"  className={ this.state.leftNavExpand ? 'left__nav left__nav_expanded' : 'left__nav' }>
        <ul>
            <li className="li-hamburger">
                <button className="breadcrumb__wrapper btn-hamburger" onClick={this.toogleLeftNav}>
                    <span className="icon icon-globalNavBtn"></span>
                </button>
            </li>
            <ul>
                <li>
                    <Link id="dashboard" name="dashboard" to="/dashboard" >
                        <span className="icon icon-home slide-nav-icon"></span>
                        <span>Dashbaord</span>
                    </Link>
                </li>
                <li>
                    <Link id="pepole" name="pepole" to="/inviteUser">
                        <span className="icon icon-people slide-nav-icon"></span>
                        <span>Invite User</span>
                    </Link>
                </li>
                <ul className="bottom-nav">
                <li>
                    <a href="#">
                        <span className="icon icon-settings slide-nav-icon"></span>
                        <span>Settings</span>

                    </a>
                </li>

                <li>
                    <a id="user" name="user" href="#">
                       {isProfileImg?<img class='profile-img slide-nav-icon'src={this.state.profileImg}/>
                       :<span className="icon icon-user user-icon slide-nav-icon"></span>}
                        <span className="user-span" title="">Nagaraju</span>
                    </a>
                </li>
                </ul>
             
            </ul>

              </ul>
                </div>

    )
  }
  }
  const mapStateToProps = (store,ownProps)=>{
    return {
        leftNavExpand: store.isLeftNavExpanded
    };
  }
  const mapDispatchToProps = (dispatch) => {
      return{
        updateLeftNav: (isLeftNavExpanded)=>{
            dispatch(leftNavExpand(isLeftNavExpanded))
            dispatch(showLoader(isLeftNavExpanded))
        }
      }
  
    
  }
export default connect(mapStateToProps,mapDispatchToProps)(LeftNav);
