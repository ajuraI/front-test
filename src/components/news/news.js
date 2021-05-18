import './news.css';
import image from '../../img/news-img.webp';
import { useState } from 'react';
import NewsCard from '../../components/news-card';

const newsCards = [
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'}, 
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'},
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'},
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'},
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'},
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'},
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'},
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'},
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'},
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'},
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'},
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'},
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'},
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'},
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'},
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'},
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'},
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'},
  {img: image, type: 'Услуги', title: 'Фотобудки, GIF стойка', text: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни', date: '20 Марта 2021'}]

function News() {

  const [visibleCount, setVisibleCount] = useState(3);

  const cardsList = () => {
    let arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push(<li><NewsCard object={newsCards[i]}/></li>);
    }
    return arr;
  }

  const showMore = () => {
    if (visibleCount + 3 > newsCards.length) setVisibleCount(newsCards.length);
    else setVisibleCount(prev=>prev+3);
  }

  return (
    <section className="news">
      <div className="overTitle">Почему выбирают нас?</div>
      <div className="title">Новости</div>
      {<ul>{cardsList()}</ul>}
      <button class="showMore-btn" style={{display: visibleCount === newsCards.length ? 'none' : 'flex'}} onClick={() => showMore()}>Показать ещё</button>
    </section>
  );
}
export default News;


