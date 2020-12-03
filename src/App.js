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
  switchName = () =>{
    this.setState({
      users:[
        { name: 'Michael', age: '25' },
        { name: 'Lena', age: '26' }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.switchName}>Switch name</button>
        <UserInput/>
        <UserOutput
          name={this.state.users[0].name}
          age={this.state.users[0].age}/>
        <UserOutput
          name={this.state.users[1].name}
          age={this.state.users[1].age}/>
        <ol>
          
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
      </div>
    );
  }
}

export default App;
