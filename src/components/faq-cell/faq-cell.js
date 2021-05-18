import './faq-cell.css';
import downArrowWhite from '../../img/downArrow-white.svg';
import downArrowRed from '../../img/downArrow-red.svg';

function FaqCell(props) {

  const {children, title, state, setState} = props;


  return (
    <div className="faq-cell">
      <div className={state ? "faq-question-wrapper faq-question-wrapper-active" : "faq-question-wrapper"}>
        <div className={state ? "faq-question faq-question-active" : "faq-question"} onClick={()=> setState()}>
          <div className="question-title">{title}</div>
          <div className="downArrow-wrapper"><img src={state ? downArrowWhite: downArrowRed} alt=""></img></div>
        </div>
        <div className={state ? "faq-slide": "faq-slide faq-slide-hidden"}>{children}</div>
      </div>
    </div>
  );
}
export default FaqCell;
