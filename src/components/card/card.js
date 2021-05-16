import './card.css';
import Slider from '../slider';
import image from '../../img/photo.png';
import image2 from '../../img/photo2.png';


function Card() {
  
  return (
    <div className="card">
      <Slider width={296} height={222}>
          <img src={image} />
          <img src="http://faunazoo.ru/wp-content/uploads/2020/12/%D0%9F%D0%BE%D1%80%D0%BE%D0%B4%D0%B0-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA-%D0%A8%D0%B5%D0%BB%D1%82%D0%B8.jpg" width="296px" height="222px"/>
          <img src="https://avatars.mds.yandex.net/get-zen_doc/1708203/pub_5d985db0aad43600b1cdc12a_5d985e195eb26800ad09533f/scale_1200" width="296px" height="222px"/>
      </Slider>
    </div>
  );
}
export default Card;
