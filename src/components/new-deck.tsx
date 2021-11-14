import React from 'react';
import { toast } from 'react-toastify';

function NewDeck() {
  const notify = (msg: string) => toast.success(msg);

  return (
    <div>
      <h1>Deck of cards</h1>
      <div className="table"></div>
    </div>
  );
}

export default NewDeck;