import './card.css';
import Slider from '../slider';
import image from '../../img/photo.png';
import mark from '../../img/check-mark.svg';
import { useState } from 'react';



function Card({cardProp}) {
  // const {title, price, options} = cardProp;
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedRentTime, setSelectedRentTime] = useState(0);

  const addOption = (idx, optPrice) => {
    if (!selectedOptions.includes(idx)) {
      setSelectedOptions((prev) => [...prev, idx])
      cardProp.price += optPrice;
    }
    else {
      setSelectedOptions((prev) => {
        let index = prev.indexOf(idx);
        let newArr = [];
        if (index > 0) newArr = [...prev.slice(0, index), ...prev.slice(index+1, prev.length)];
        else newArr = prev.slice(index+1, prev.length)
        return newArr;
      })
      cardProp.price -= optPrice;
    }
    
  }


  const optionList = (
    cardProp.options.map((opt, idx)=> {
      return <div key={idx} className="option">
       <div className="option-picture">
         <img src={image} />
       </div>
       <div className="description">
         <div className="name">{opt.name}</div>
         <div className="cost">{'От ' + opt.price + ' ₽'}</div>
       </div>
       <div className={selectedOptions.includes(idx) ? "radio-btn radio-btn-active" : "radio-btn"} onClick={() => addOption(idx, opt.price)}>
         <img src={mark} />
       </div>
     </div>
   })
  )

  return (
    <div className="card">
      <Slider width={296} height={222}>
          <img src={image} />
          <img src={image} />
          <img src={image} />
          <img src={image} />
          <img src={image} />
      </Slider>
      <div className="card-title">{cardProp.title}</div>
      <div className="subTitle">Размер: <span>2м x 1.5м x 2 м</span></div>
      <div className="add-options">
        <div className="options-title">Доп. опции</div>
        <div className="options-wrapper-2">
          <div className="scroll-track"></div>
          <div className="options-wrapper">
            {optionList}
            
          </div>
        </div>
      </div>
      <div className="rent-time">
        <div className="rent-title">Укажите время аренды</div>
        <div className="rent-blocks-wrapper">
          <div className="time-blocks-row">
            <div className={selectedRentTime === 0 ? "time-block time-block-active" : "time-block"} onClick={()=> setSelectedRentTime(0)}>1 час</div>
            <div className={selectedRentTime === 1 ? "time-block time-block-active" : "time-block"} onClick={()=> setSelectedRentTime(1)}>2 часа</div>
            <div className={selectedRentTime === 2 ? "time-block time-block-active" : "time-block"} onClick={()=> setSelectedRentTime(2)}>3 часа</div>
            <div className={selectedRentTime === 3 ? "time-block time-block-active" : "time-block"} onClick={()=> setSelectedRentTime(3)}>5 часов</div>
          </div>
          <div className="time-blocks-row">
            <div className={selectedRentTime === 4 ? "time-block time-block-active" : "time-block"} onClick={()=> setSelectedRentTime(4)}>Выставка 2 дня</div>
            <div className={selectedRentTime === 5 ? "time-block time-block-active" : "time-block"} onClick={()=> setSelectedRentTime(5)}>Выставка 3 дня</div>
          </div>
        </div>
      </div>
      <div className="total">
        <div className="total-price">{cardProp.price + ' ₽'}</div>
        <button className="request-btn">Оставить заявку</button>
      </div>
    </div>
  );
}
export default Card;
