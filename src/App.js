import React from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters:[] 
    }
  }
  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(users => this.setState({monsters:users}));
    fetch('https://api.pokemontcg.io/v1/cards')
    .then(response => response.json())
    .then(users =>this.setState({monsters:users.cards}));
  }
  render() {
    return (
      <div className="App">
        <h1>Pokemontcg</h1>
        <CardList monsters={this.state.monsters}></CardList>
        
      </div>
    )
  }
}

export default App;
