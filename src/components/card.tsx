import React, { useEffect, useState } from 'react';

function Card(props: { cardSuit: any; cardValue: {} | null | undefined; }) {
  const [suitSymbol, setSuitSymbol] = useState('');

  useEffect(() => {
    switch (props.cardSuit) {
      case 'H':
        setSuitSymbol('♥');
        break;
      case 'D':
        setSuitSymbol('♦');
        break;
      case 'C':
        setSuitSymbol('♣');
        break;
      case 'S':
        setSuitSymbol('♠︎');
        break;
    }

  }, [props]);

  return (
    <div className="card">
      <div className="card-topleft">
        <div className="card-corner-rank">{props.cardValue}</div>
        <div className="card-corner-suit">{suitSymbol}</div>
      </div>
      <div className="card-suits">
        <div className="card-suit">{suitSymbol}</div>
      </div>
      <div className="card-bottomright">
        <div className="card-corner-rank">{props.cardValue}</div>
        <div className="card-corner-suit">{suitSymbol}</div>
      </div>
    </div>
  );
}

export default Card;