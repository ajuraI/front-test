import './news-card.css';
import ImgWebp from '../img-webp'




function NewsCard({object}) {

  const {img, type, title, text, date} = object;

  return (
    <div className="news-card">
      <div className="img">
        <ImgWebp srcWebp={img} alt=""/>
      </div>
      <div className="card-description">
        <div className="overTitle">{type}</div>
        <div className="title">{title}</div>
        <div className="text">{text}</div>
        <div className="date">{date}</div>
      </div>
    </div>
  );
}
export default NewsCard;


