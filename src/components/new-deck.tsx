import React from 'react';
import { toast } from 'react-toastify';

function NewDeck() {
  const notify = (msg: string) => toast.success(msg);

  return (
    <div>
      <h1>Deck of cards</h1>
      <div className="table">
        <div className="add_card">
          <label htmlFor="card_input">Add cards to the pile</label>
          <input type="text" name="card_input" />
          <button>Add</button>
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