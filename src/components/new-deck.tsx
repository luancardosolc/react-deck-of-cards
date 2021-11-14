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
          <input type="text" name="card_input"/>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default NewDeck;