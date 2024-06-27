import React, { useContext } from 'react';
import './gameCard.css';
import GameRating from './GameRating';
import { AppContext } from '../App';

function GameCard({ game }) {
  const { library, setLibrary, bag, setBag } = useContext(AppContext);

  const handleAddToLibrary = game => {
    setLibrary([...library, game]);
  };

  const handleRemoveFromLibrary = game => {
    setLibrary([...library, game]);
    setLibrary(library.filter(item => item.id !== game.id));
  };

  const handleAddToBag = game => {
    if (bag.includes(game)) return;
    setBag([...bag, game]);
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gameCard">
        <img src={game.background_image} alt={game.name} className="img-fluid" />
        <a
          href="#"
          className={`like ${library.includes(game) ? 'active' : undefined}`}
          onClick={
            library.includes(game)
              ? () => handleRemoveFromLibrary(game)
              : () => handleAddToLibrary(game)
          }
        >
          <i className="bi bi-heart-fill"></i>
        </a>
        <div className="gameFeature">
          <span className="gameType">{game.genres[0].name}</span>
          <GameRating rating={game.rating} />
        </div>
        <h4 className="gameTitle mt-4 mb-3">{game.name}</h4>
        <div className="gamePrice">
          <span className="currentPrice">
            ${game.metacritic}
          </span>
        </div>
        <a className="addBag" href="#" onClick={() => handleAddToBag(game)}>
          <i className="bi bi-bag-plus-fill"></i>
        </a>
      </div>
    </div>
  );
}

export default GameCard;
