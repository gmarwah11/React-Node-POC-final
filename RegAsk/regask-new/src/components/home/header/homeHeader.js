import React, { Component } from 'react';
import '../assets/css/homeHeader.css';
import sessionstorage from "sessionstorage";
class HomeHeader extends Component {
    constructor(props){
        super(props);
        this.username = props.username; 
        this.state ={
            name:'',
            username: props.username
        }
        if(props){
            console.log('props in header home',props);
            // name = props.match.params.username;
        }
    }
    componentWillMount(){
        console.log(this.props);
        this.setState({
            username: this.props.username
        });
    }
    
    render() {
        return(
            <div id="homeHeaderCon"> 
                <div id="h1">
                <img src={require('../assets/header/Group 1/Group 1.png')} id="logo" alt=""/>
            </div>
            <div id="h2">
                <img src={require('../assets/header/Subtraction 2/Subtraction 2.png')}  id="parrellogram" alt="" srcset=""/>
                <span id="welcomeu">Welcome {this.state.username}</span>
                <img src={require('../assets/header/UserIcon/Group 19.png')}  alt="" id="userIcon"/>
            </div>
            </div>
        )
    }
}
export default HomeHeader;