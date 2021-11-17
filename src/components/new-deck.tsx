import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Card from './card';

function NewDeck() {
  const notifySuccess = (msg: string) => toast.success(msg);
  const notifyError = (msg: string) => toast.error(msg);

  //Strongest to weakest
  const originalSuits = ['H', 'D', 'C', 'S'];
  const originalValues = ['2', 'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3'];
  const [pile, setPile] = useState<string[]>([]);
  const [cardInput, setCardInput] = useState('');
  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setCardInput(e.target.value);

  const addCardToPile = () => {
    const [value, suit] = cardInput.split('');
    const findSuit = originalSuits.includes(suit);
    const findValue = originalValues.includes(value);
    const findPile = pile.includes(cardInput);

    if (!(findSuit && findValue)) {
      notifyError('Invalid card!');
      return;
    }

    if (findPile) {
      notifyError('The pile already contains this card!');
      return;
    }

    if (pile.length >= 10) {
      notifyError('The pile already contains 10 cards!');
      return;
    }

    setPile([...pile, cardInput]);
    notifySuccess(`Card '${cardInput}' added to the pile.`);

    //TODO: Add in the strenght order
    //TODO: pile variable to html table
  }

  let items: Array<any> = [];
  pile.forEach((item) => {
    items.push(<Card cardValue={item.slice(0, 1)} cardSuit={item.slice(1, 2)} key={item}/>);
  })

  return (
    <div>
      <h1>Deck of cards</h1>
      <div className="table table-body">
        <div className="addeded_cards">
          {items}
        </div>
      </div>
      <div className="table table-controls">
        <div className="add_card">
          <label htmlFor="card_input">Add cards to the pile</label>
          <input placeholder="Value Suit" type="text" name="card_input" maxLength={2} value={cardInput} onChange={handleChange} />
          <button onClick={addCardToPile}>Add</button>
        </div>
      </div>
      <div className="rotation_card">
        <label htmlFor="rotation_card_input">Rotation card</label>
      </div>
      <div className="rotation_card_body">
        <input type="text" name="rotation_card_input" placeholder="Card name" />
        <button>Submit Deck</button>
      </div>
    </div>
  );
}

export default NewDeck;