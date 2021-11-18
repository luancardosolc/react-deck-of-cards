import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { DeckOfCardsApi } from '../API/DeckOfCards';
import Card from './card';

function NewDeck() {
  const notifySuccess = (msg: string) => toast.success(msg);
  const notifyError = (msg: string) => toast.error(msg);

  //Strongest to weakest
  const originalSuits = ['H', 'D', 'C', 'S'];
  const originalValues = ['2', 'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3'];
  const [pile, setPile] = useState<string[]>([]);
  const [cardInput, setCardInput] = useState('');
  const [rotationCardInput, setRotationCardInput] = useState('');
  const handleCardChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setCardInput(e.target.value);
  const handleRotationChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setRotationCardInput(e.target.value);

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
  }

  const submit = async () => {
    const [value, suit] = rotationCardInput.split('');
    const findSuit = originalSuits.includes(suit);
    const findValue = originalValues.includes(value);

    if (pile.length === 0) {
      notifyError('You must add cards to the pile!');
      return;
    }

    if (!(findSuit && findValue)) {
      notifyError('Invalid card!');
      return;
    }

    const newDeckResponse = await DeckOfCardsApi.newDeck(pile);
    const addHandResponse = await DeckOfCardsApi.addHandPile(newDeckResponse.deck_id, pile);
    const newRotationDeckResponse = await DeckOfCardsApi.newDeck([rotationCardInput]);
    const addRotationResponse = await DeckOfCardsApi.addRotationPile(newRotationDeckResponse.deck_id, rotationCardInput);

    console.log('newDeckResponse', newDeckResponse);
    console.log('addHandResponse', addHandResponse);
    console.log('newRotationDeckResponse', newRotationDeckResponse);
    console.log('addRotationResponse', addRotationResponse);

    notifySuccess(`Deck '${newDeckResponse.deck_id}' created with sucess.`);
  }

  let items: Array<any> = [];
  pile.forEach((item) => {
    items.push(<Card cardValue={item.slice(0, 1)} cardSuit={item.slice(1, 2)} key={item} />);
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
          <input placeholder="Value Suit" type="text" name="card_input" maxLength={2} value={cardInput} onChange={handleCardChange} />
          <button onClick={addCardToPile}>Add</button>
        </div>
      </div>
      <div className="rotation_card">
        <label htmlFor="rotation_card_input">Rotation card</label>
      </div>
      <div className="rotation_card_body">
        <input type="text" name="rotation_card_input" placeholder="Card name" value={rotationCardInput} onChange={handleRotationChange} />
        <button onClick={submit}>Submit Deck</button>
      </div>
    </div>
  );
}

export default NewDeck;