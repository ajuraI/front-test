import './cards-filter.css';
import { useState } from 'react';
import downArrow from '../../img/downArrow.svg';



function CardsFilter() {

  const [sortType, setSortType] = useState(0);


  const getSortPopup = () => {
    setSortType((prev) => !prev);
  }

  return (
    <div className="cards-filter">
      <h1 className="title">Фотобудки</h1>
      <div className="sort-line">Сортировка: 
        <div>{!sortType ? 'По убыванию' : 'По возрастанию'}</div>
        <div className="sortBtn" onClick={()=> getSortPopup()}><img src={downArrow}></img></div>
      </div>
    </div>
  );
}

export default CardsFilter;
