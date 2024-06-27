import React, { useContext } from 'react';
import './shopBagItem.css';
import { AppContext } from '../App';

function ShopBagItem({ game, index }) {
  const { bag, setBag } = useContext(AppContext);

  const handleRemoveFromBag = game => {
    setBag([...bag, game]);
    setBag(bag.filter(item => item.id !== game.id));
  };

  return (
    <tr className="shopBagItem">
      <th scope="row">{index + 1}</th>
      <td>
        <img src={game.background_image} alt="" className="img-fluid" />
      </td>
      <td>{game.name}</td>
      <td>${game.metacritic.toFixed(2)}</td>
      <td>
        <a href="#" onClick={() => handleRemoveFromBag(game)}>
          <i className="bi bi-trash"></i>
        </a>
      </td>
    </tr>
  );
}

export default ShopBagItem;
