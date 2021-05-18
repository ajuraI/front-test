import './cards-filter.css';
import { useState } from 'react';
import downArrow from '../../img/downArrow.svg';
import Card from '../../components/card';

const options = [{name: 'Разработка макета рамки #1', price: 500}, {name: 'Разработка макета рамки #1', price: 500}]
const Cards = [{name: 'Фотобудка с ширмой #1', price: 17000, size: '2м x 1.5м x 2 м', options: options},{name: 'Фотобудка с ширмой #1', price: 17000, size: '2м x 1.5м x 2 м', options: options}];

// const options = [{name: 'Разработка макета рамки #1', price: 500},
// {name: 'Разработка макета рамки #2', price: 600},
// {name: 'Разработка макета рамки #3', price: 700},
// {name: 'Разработка макета рамки #4', price: 800},
// {name: 'Разработка макета рамки #5', price: 900},
// {name: 'Разработка макета рамки #6', price: 1000},
// {name: 'Разработка макета рамки #7', price: 1100},
// {name: 'Разработка макета рамки #8', price: 1200},
// {name: 'Разработка макета рамки #9', price: 1300},
// {name: 'Разработка макета рамки #10', price: 1400},
// {name: 'Разработка макета рамки #11', price: 1500},
// {name: 'Разработка макета рамки #12', price: 1600},
// {name: 'Разработка макета рамки #13', price: 1700},
// {name: 'Разработка макета рамки #14', price: 1800},
// {name: 'Разработка макета рамки #15', price: 1900},
// {name: 'Разработка макета рамки #16', price: 2000},
// {name: 'Разработка макета рамки #17', price: 2100},
// {name: 'Разработка макета рамки #18', price: 2200},
// {name: 'Разработка макета рамки #19', price: 2300},
// {name: 'Разработка макета рамки #20', price: 2400}]

// const Cards = [
//   {name: 'Фотобудка с ширмой #1', price: 17000, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #2', price: 17100, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #3', price: 17200, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #4', price: 17300, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #5', price: 17400, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #6', price: 17500, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #7', price: 17600, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #8', price: 17700, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #9', price: 17800, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #10', price: 17900, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #11', price: 18000, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #12', price: 18100, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #13', price: 18200, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #14', price: 18300, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #15', price: 18400, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #16', price: 18500, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #17', price: 18600, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #18', price: 18700, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #19', price: 18800, size: '2м x 1.5м x 2 м', options: options},
//   {name: 'Фотобудка с ширмой #20', price: 18900, size: '2м x 1.5м x 2 м', options: options},
// ]

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

  return (
    <section className="cards-filter">
      <h1 className="title">Фотобудки</h1>
      <div className="sort-line">Сортировка: 
        <div className="sortBtn" onClick={()=> changeSort()}>{sortType === 0 ? 'По убыванию' : 'По возрастанию'} <img src={downArrow}  alt=""></img></div>
      </div>
      {<ul>{cards.map((card, idx) => <li key={idx}><Card cardProp={card}/></li>)}</ul>}
    </section>
  );
}

export default CardsFilter;
