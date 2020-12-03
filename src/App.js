import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    users:[
      { name: 'Mike', age: '25' },
      { name: 'Lena', age: '27' }
    ]
  }
  style = {
    display: 'block',
    outline: 'none',
    padding: '10px',
    border: '2px solid green',
    cursor: 'pointer',
    margin: '10px'
  }
  switchNameButton = (newName) =>{
    this.setState({
      users:[
        { name: 'Mike', age: '25' },
        { name: newName, age: '27' }
      ]
    })
  }
  switchName = (event) =>{
    this.setState({
      users:[
        { name: event.target.value, age: '25' },
        { name: 'Lena', age: '26' }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <button style={this.style} onClick={()=>this.switchNameButton('Helen')}>Switch user</button>
        <UserInput
          changed={this.switchName}
          name = {this.state.users[0].name}/>
        <UserOutput
          name={this.state.users[0].name}
          age={this.state.users[0].age}/>
        <UserOutput
          name={this.state.users[1].name}
          age={this.state.users[1].age}/>
      </div>
    );
  }
}

export default App;
