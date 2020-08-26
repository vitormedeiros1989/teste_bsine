import React from 'react';

import ReactDOM from 'react-dom';
// import { Container } from './styles';

class AppB extends React.Component {  
  constructor() {
    super();
    this.state = {
      card: []
    };
  }

  cardContent = (i, e) => {
    let card = this.state.card;
    card[i].name = e.target.value;
    this.setState({ card: card });
  }

  newCard = () => {
    let card = this.state.card;
    card.push(({name: ''}));
    this.setState({ card: card});
  }

  render() {
    return (
      <div>
        <div>
        <button onClick={this.newCard}>+</button>
          {this.state.card.map((c, i) => 
            <div key={i}>
              <h1>Card</h1>              
            </div>
          )}          
        </div>
      </div>
    )
  }
}

export default AppB;
