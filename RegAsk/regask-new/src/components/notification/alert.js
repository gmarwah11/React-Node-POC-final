import React, { Component } from 'react';
class AlertNotification extends Component {
  constructor(props){
    super(props);
    this.state ={
      name:'Jatin'
    }
  }
  render() {
    return (
      <div className="App">
      Hi Jatin Alert Notification {this.state.name}
      </div>
    );
  }
}

export default AlertNotification;
