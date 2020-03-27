import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class CreateOrAddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jatin'
    }
  }
  onSubmit(e) {
    e.preventDefault()


  }
  render() {
    return (
      <div className="App">
        <div id="b">
          <img src={require('./assets/RegAskLogo/Group 1.png')} id="logo1" alt="" />
          <img src={require('./assets/Parallelorgam/Path 19@2x.png')} id="backParr" />
          <img src={require('./assets/RegASK/mini.png')} id="reserv" alt="" />
        </div>
      </div>
    );
  }
}

export default CreateOrAddUser;
