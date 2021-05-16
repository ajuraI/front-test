import './cards-filter.css';
import { useState } from 'react';
import downArrow from '../../img/downArrow.svg';
import Card from '../../components/card';

const Cards = [
  {name: 'Фотобудка с ширмой #1', price: '17100', options: [{name: 'Разработка макета рамки #1', price: '500'},{name: 'Разработка макета рамки #2', price: '600'},{name: 'Разработка макета рамки #3', price: '700'}]},
  {name: 'Фотобудка с ширмой #2', price: '17000', options: [{name: 'Разработка макета рамки #1', price: '500'},{name: 'Разработка макета рамки #2', price: '600'},{name: 'Разработка макета рамки #3', price: '700'}]},
  {name: 'Фотобудка с ширмой #3', price: '17200', options: [{name: 'Разработка макета рамки #1', price: '500'},{name: 'Разработка макета рамки #2', price: '600'},{name: 'Разработка макета рамки #3', price: '700'}]}
]

function CardsFilter() {

  const [sortType, setSortType] = useState(0);
  const [cards, setCards] = useState(Cards.sort((a, b) => a.price-b.price));

  const changeSort = () => {
    if (sortType === 0) {
      setSortType(1);
      setCards((prev) => prev.sort((a, b) => b.price-a.price));
    }
    else {
      setSortType(0);
      setCards((prev) => prev.sort((a, b) => a.price-b.price));
    }
  }
 
  let cardsList = <ul>{cards.map((card, idx) => <li key={idx}>{card.name} {card.price}</li>)}</ul>;

  return (
    <div className="cards-filter">
      <h1 className="title">Фотобудки</h1>
      <div className="sort-line">Сортировка: 
        <div className="sortBtn" onClick={()=> changeSort()}>{sortType === 0 ? 'По убыванию' : 'По возрастанию'} <img src={downArrow}></img></div>
      </div>
      {cardsList}
      <Card />
      
    </div>
  );
}

export default CardsFilter;
