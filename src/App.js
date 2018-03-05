import React from 'react';
import './App.css';

const Card = props => {
  return (
    <div style={{ margin: '1em' }}>
      <img width="75" src={props.avatar_url} />
      <div style={{ display: 'inline-block', marginLeft: '10px' }}>
        <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};
let data = [
  {
    name: 'A.Erkan ÇELİK',
    avatar_url: 'https://avatars2.githubusercontent.com/u/1387120?v=4',
    company: 'formalistech',
  },
  {
    name: 'Enes Erdogan',
    avatar_url: 'https://avatars1.githubusercontent.com/u/6318361?v=4',
    company: 'formalistech',
  },
];
const CardList = props => {
  return <div>{props.cards.map(card => <Card {...card} />)}</div>;
};

class Form extends React.Component {
  render() {
    return form;
  }
}

ReactDOM.render(<CardList cards={data} />, mountNode);
export default App;
