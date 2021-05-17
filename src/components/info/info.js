import './info.css';
import infinity from '../../img/infinity.png';
import mask from '../../img/mask.png';
import price from '../../img/price.png';
import photos from '../../img/photos.png';

function Info() {
  return (
    <section className="info">
      <h1 className="title"><span>Фото на</span><br/>праздник</h1>
      <div className="info-text">Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit</span>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      <div className="advantages">
        <div className="adv-line">
          <div className="adv-block1">
            <img src={infinity} alt=""></img>
            <div className="adv-text1">Безлимитная<br/> печать фото</div>
          </div>
          <div className="adv-block1">
            <img src={mask} alt=""></img>
            <div className="adv-text1">Фотореквизит<br/> в наличии</div>
          </div>
        </div>
        <div className="adv-line">
          <div className="adv-block1">
            <img src={photos} alt=""></img>
            <div className="adv-text1">Фотоотчет в электронном виде</div>
          </div>
          <div className="adv-block1">
            <img src={price} alt=""></img>
            <div className="adv-text1">Цены<br/>ниже рынка</div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Info;
