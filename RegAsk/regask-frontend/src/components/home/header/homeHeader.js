import React from 'react';
import '../assets/css/homeHeader.css';
const HomeHeader = (props)=>{
    var name='Kaju';
    
    var username = props.username;
    if(props){
        console.log('props in header home',props);
        // name = props.match.params.username;
    }
   
    return(
        <div id="homeHeaderCon"> 
            <div id="h1">
              <img src={require('../assets/header/Group 1/Group 1.png')} id="logo" alt=""/>
          </div>
          <div id="h2">
              <img src={require('../assets/header/Subtraction 2/Subtraction 2.png')}  id="parrellogram" alt="" srcset=""/>
              <span id="welcomeu">Welcome {username}</span>
               <img src={require('../assets/header/UserIcon/Group 19.png')}  alt="" id="userIcon"/>
          </div>
        </div>
    )
}
export default HomeHeader;