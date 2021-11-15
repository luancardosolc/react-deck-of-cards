import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

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

    setPile([...pile, cardInput]);
    console.log('pile', pile);
    notifySuccess(`Card '${cardInput}' added to the pile.`);
  }

  return (
    <div>
      <h1>Deck of cards</h1>
      <div className="table table-body">
        <div className="addeded_cards">
          <div className="card">
            <div className="card-topleft">
              <div className="card-corner-rank">3</div>
              <div className="card-corner-suit">♠︎</div>
            </div>
            <div className="card-suits">
              <div className="card-suit">♠︎</div>
            </div>
            <div className="card-bottomright">
              <div className="card-corner-rank">3</div>
              <div className="card-corner-suit">♠︎</div>
            </div>
          </div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>

        </div>
      </div>
      <div className="table table-controls">
        <div className="add_card">
          <label htmlFor="card_input">Add cards to the pile</label>
          <input type="text" name="card_input" maxLength={2} value={cardInput} onChange={handleChange} />
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