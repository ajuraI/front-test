import './card.css';
import Slider from '../slider';
import image from '../../img/photo.png';
import mark from '../../img/check-mark.svg';
import { useState } from 'react';
import ModalWindow from '../modal-window'
import DropDown from '../drop-down'
import InputMask from 'react-input-mask';
import downArrow from '../../img/downArrow.svg';




function Card({cardProp}) {
  // const {title, price, options} = cardProp;
  const [defaultCardPrice, setDefaultCardPrice] = useState(cardProp.price);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedRentTime, setSelectedRentTime] = useState(0);
  const [modal, setModalState] = useState(false);

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
         <img src={image} alt="" width="60px" height="60px"/>
       </div>
       <div className="description">
         <div className="name">{opt.name}</div>
         <div className="cost">{'От ' + opt.price.toLocaleString() + ' ₽'}</div>
       </div>
       <div className={selectedOptions.includes(idx) ? "radio-btn radio-btn-active" : "radio-btn"} onClick={() => addOption(idx, opt.price)}>
         <img src={mark} alt="" width="16px" height="14px"/>
       </div>
     </div>
   })
  )

  const rentTime = (
     (()=> {switch (selectedRentTime) {
      case 0:
        return '1 час';
      case 1:
        return '2 часа';
      case 2:
        return '3 часа';
      case 3:
        return '5 часов';
      case 4:
        return '2 дня';
      case 5:
        return '3 дня';
      default:
        break;
    }})()
  )

  const getUpValue = (value) => {
    setSelectedRentTime(value);
  }



  return (
    <div className="card">
      <Slider width={296} height={222}>
          <img src={image}  alt="" width="296px" height="222px"/>
          <img src={image}  alt="" width="296px" height="222px"/>
          <img src={image}  alt="" width="296px" height="222px"/>
          <img src={image}  alt="" width="296px" height="222px"/>
          <img src={image}  alt="" width="296px" height="222px"/>
      </Slider>
      <div className="card-title">{cardProp.name}</div>
      <div className="subTitle">Размер: <span className="size">{cardProp.size}</span></div>
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
        <div className="total-price">{cardProp.price.toLocaleString() + ' ₽'}</div>
        <button className="request-btn" onClick={()=> setModalState(true)}>Оставить заявку</button>
      </div>
      <ModalWindow state={modal} close={()=> setModalState(false)} type={2}>
        <div className="title modal-title">Ваша заявка</div>
        <div className="params-block">
          <div className="main-product">
            <div className="product-name-wrapper">
              <div className="product-title">{cardProp.name}</div>
              <div className="product-sizes">Размер: <span className="size">{cardProp.size}</span></div>
            </div>
            <div className="product-price">{defaultCardPrice.toLocaleString() + ' ₽'}</div>
          </div>
          <div className="rent-time-wrap">
            <DropDown value={rentTime} upValue={getUpValue}> 
              <div>1 час</div>
              <div>2 часа</div>
              <div>3 часа</div>
              <div>5 часов</div>
              <div>2 дня</div>
              <div>3 дня</div>
            </DropDown>
          </div>
        </div>
        <div className="options-block">
          {<ul>{selectedOptions.map((idx) => <li className="option-row">
              <div className="option-name">{cardProp.options[idx].name}</div>
              <div className="option-cost">{cardProp.options[idx].price.toLocaleString() + ' ₽'}</div>
            </li>)}</ul>}
        </div>
        <div className="total-block">
          <div className="total-text">Итого:</div>
          <div className="total-cost">{cardProp.price.toLocaleString() + ' ₽'}</div>
        </div>
        <div className="telephone-block">
          <InputMask className="phone-mask" mask="+7 (999) 999-99-99" placeholder="+7 (000) 000 00 00"/>
          <div className="call-me">
            <div>Позвоните мне</div>
            <div><img src={downArrow} alt="" /></div>
          </div>
        </div>
        <button className="send-request" onClick={()=> setModalState(false)}>Отправить заявку</button>
      </ModalWindow>
    </div>
  );
}
export default Card;
