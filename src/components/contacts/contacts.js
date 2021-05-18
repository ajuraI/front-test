import './contacts.css';
import phone from '../../img/phone.svg';
//import { Map, Marker } from 'yandex-map-react';
import map from '../../img/map.webp'
import ImgWebp from '../img-webp'


function Contacts() {

  // const [visibleCount, setVisibleCount] = useState(3);

  return (
    <>
      <section className="contacts">
        <div className="overTitle">Мы всегда доступны для вас</div>
        <div className="title">Контакты</div>
        <div className="contacts-block">
          <div className="contact-wrap">
            <div className="contact-icon"><img src={phone} alt="" /></div>
            <div className="contact-field">
              <div className="contact-title">Телефон</div>
              <div className="contact-text">+7 495 123 45 67</div>
            </div>
          </div>
          <div className="contact-wrap">
          <div className="contact-icon"><img src={phone} alt="" /></div>
            <div className="contact-field">
              <div className="contact-title">Адрес</div>
              <div className="contact-text">109382, Москва, пр. Егорьевский, д.2а, стр.10 въезд на машине только с улицы Люблинская</div>
            </div>
          </div>
          <div className="contact-wrap">
          <div className="contact-icon contact-icon-empty"></div>
            <div className="contact-field">
              <div className="contact-title">Почта</div>
              <div className="contact-text underline">Info@test.ru</div>
            </div>
          </div>
        </div>
      </section>
      <div className="map-wrapper">
        {/* <img src={map} alt="" /> */}
        <ImgWebp srcWebp={map} alt=""/>
        {/* <Map center={[55.751574, 37.573856]} zoom={12}>
            <Marker lat={55.751574} lon={37.573856} />
        </Map> */}
      </div>
    </>
  );
}
export default Contacts;


