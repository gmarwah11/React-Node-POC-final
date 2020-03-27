import React, { Component } from 'react';
import Login from '../../components/accounts/loginUser';
import AddUser from '../../components/accounts/createUser';
import ChangePassword from '../../components/accounts/changePasswordUser';
import './authContainer.css';
import AuthLandingOperation from '../../models/operations/rootLanding';
class AuthContainer extends Component {
  // type = this.props.computedMatch.params.type;
  constructor(props) {
    super(props);
    this.typeAuth = props.type;

    console.log('props in constructor ', props);
    this.state = {
      name: 'Jatin'
    }
  }

  render() {
    console.log('Type Auth in render', this.typeAuth,AuthLandingOperation.type);
    // if ( AuthLandingOperation.type === 'login') {
    //   return (

    //     <div className="App">

           
    //         <Login />
         
    //     </div>
    //   );
    // }
    // else if ( AuthLandingOperation.type=== 'adduser') {
    //   return (

    //     <div className="App">

    //       {/* Hi Jatin  Container {this.state.name} in Auth */}

    //        <AddUser />
       
    //     </div>
    //   );
    // }
    return (

      <div  >


          <Login />
      
      </div>
    );
  }
}

export default AuthContainer;
