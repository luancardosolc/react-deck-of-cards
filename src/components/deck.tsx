import React from 'react';
import { useParams } from 'react-router-dom';

function Deck() {
  let { id } = useParams();

  return (
    <div>
      <p>Deck: {id}</p>
    </div>
  );
}

export default Deck;