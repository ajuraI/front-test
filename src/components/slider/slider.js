import './slider.css';
import btnPrev from '../../img/btn-back.svg';
import btnNext from '../../img/btn-next.svg';
import { useState } from 'react';

function Slider(props) {

  let showedSlides = [];
  if (props.children.length > 2) showedSlides = [props.children.length-1, 0, 1];
  else if (props.children.length === 2) showedSlides = [1, 0, 1];
  else if (props.children) showedSlides = [0];
  const [slides, setSlides] = useState(showedSlides);

  const btnNextOnClick = () => {
    if (slides.length > 1) {
      setSlides((prevSlides) => {
        let newSlides = [];
        newSlides[0] = prevSlides[1];
        newSlides[1] = prevSlides[2];
        newSlides[2] = (prevSlides[2] !== props.children.length-1) ? prevSlides[2]+1 : 0;
        return newSlides;
      })
    }
  }

  const btnPrevOnClick = () => {
    if (slides.length > 1) {
      setSlides((prevSlides) => {
        let newSlides = [];
        newSlides[2] = prevSlides[1];
        newSlides[1] = prevSlides[0];
        newSlides[0] = (prevSlides[0] !== 0) ? prevSlides[0]-1 : props.children.length-1;
        return newSlides;
      })
    }
  }
  
  let style = {};
  if (props.width) style.width = props.width + 'px';
  if (props.height) style.height = props.height + 'px';
  return (
    <div className="slider-wrapper">
      <div className="slider" style={style}>
        {slides.map((id, index)=> {
          let style = {};
          if (slides.length === 1) return (<div key={index} className="banner-slide" style={style}>
            {props.children}
          </div>)
          if (index === 0) style = {left: -props.width + 'px'};
          else if (index === 2) style = {left: props.width + 16 + 'px'};
          return (<div key={index} className="banner-slide" style={style}>
            {props.children[id]}
          </div>)
        })}
        <div className="button-prev" onClick={()=> btnPrevOnClick()}>
          <img src={btnPrev}></img>
        </div>
        <div className="button-next" onClick={()=> btnNextOnClick()}>
          <img src={btnNext}></img>
        </div>
        
      </div>
    </div>
  );
}
export default Slider;
