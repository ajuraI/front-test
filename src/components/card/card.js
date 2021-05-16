import './card.css';
import Slider from '../slider';
import image from '../../img/photo.png';


function Card({title, price, options}) {
  
  return (
    <div className="card">
      <Slider width={296} height={222}>
          <img src={image} />
          <img src={image} />
          <img src={image} />
          <img src={image} />
          <img src={image} />
      </Slider>
      <div className="card-title">{title}</div>
      <div className="subTitle">Размер: <span>2м x 1.5м x 2 м</span></div>
      <div className="add-options">
        <div className="options-title">Доп. опции</div>
        <div className="options-wrapper"></div>
      </div>
      <div className="rent-time"></div>
      <div className="total"></div>
    </div>
  );
}
export default Card;
