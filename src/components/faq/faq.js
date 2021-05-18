import './faq.css';
import FaqCell from '../../components/faq-cell';
import { useState } from 'react';


function FAQ() {
  

  const [activeCell, setActiveCell] = useState(-1);


  const clickCell = (id) => {
    if (activeCell === id) setActiveCell(-1)
    else setActiveCell(id)
  }

  return (
    <section className="faq">
      <div className="faq-overTitle">Почему выбирают нас?</div>
      <div className="title">FAQ</div>
      <FaqCell title="Какой реквизит идет в комплекте?" state={activeCell === 0} setState={()=> clickCell(0)}>Какой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго</FaqCell>
      <FaqCell title="Какой реквизит идет в комплекте?" state={activeCell === 1} setState={()=> clickCell(1)}>Какой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго</FaqCell>
      <FaqCell title="Какой реквизит идет в комплекте?" state={activeCell === 2} setState={()=> clickCell(2)}>Какой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго</FaqCell>
      <FaqCell title="Какой реквизит идет в комплекте?" state={activeCell === 3} setState={()=> clickCell(3)}>Какой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго</FaqCell>
      <FaqCell title="Какой реквизит идет в комплекте?" state={activeCell === 4} setState={()=> clickCell(4)}>Какой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго</FaqCell>
      <FaqCell title="Какой реквизит идет в комплекте?" state={activeCell === 5} setState={()=> clickCell(5)}>Какой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго Какой то текст для заголовка Какой то текст для загоКакой то текст для заголовка Какой то текст для заго</FaqCell>
    </section>
  );
}
export default FAQ;