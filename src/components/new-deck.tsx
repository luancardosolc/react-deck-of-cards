import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

function NewDeck() {
  useEffect(() => {
    notify('testing');
  }, []);

  const notify = (msg: string) => toast.success(msg);

  return (
    <div>
      <h1>Deck of Cards</h1>
    </div>
  );
}

export default NewDeck;