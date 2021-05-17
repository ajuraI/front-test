import './slider.css';
import btnPrev from '../../img/btn-back.svg';
import btnNext from '../../img/btn-next.svg';
import React from 'react';

class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.slide0 = React.createRef();
    this.slide1 = React.createRef();
    this.slide2 = React.createRef();
    this.slide3 = React.createRef();
    this.activeLine = React.createRef();
    this.animation = false;
    this.number = 0;
  }

  getSlides = () => {
    let showedSlides = [];
    if (this.props.children.length > 3) showedSlides = [this.props.children.length-1, 0, 1, 2];
    else if (this.props.children.length === 3) showedSlides = [2, 0, 1, 2];
    else if (this.props.children.length === 2) showedSlides = [1, 0, 1, 0];
    else if (this.props.children) showedSlides = [0];
    return showedSlides;
  }

  state = {
    slides: this.getSlides()
  };
  
  componentDidUpdate() {
    this.slide0.current.style.transition = 'none';
    this.slide1.current.style.transition = 'none';
    this.slide2.current.style.transition = 'none';
    this.slide3.current.style.transition = 'none';
    setTimeout(() => {
      this.slide0.current.style.transition = '0.5s';
      this.slide1.current.style.transition = '0.5s';
      this.slide2.current.style.transition = '0.5s';
      this.slide3.current.style.transition = '0.5s';
      this.animation = false;
    }, 100);
    
  }

  btnNextOnClick = () => {
    if (this.state.slides.length > 1 && !this.animation) {
      setTimeout(() => {
        this.slide1.current.style.left = 0 + 'px';
        this.slide2.current.style.left = this.props.width + 16 + 'px';
        this.slide3.current.style.left = this.props.width*2 + 32 + 'px';
        this.setState(({slides}) => {
          let newSlides = [];
          newSlides[0] = slides[1];
          newSlides[1] = slides[2];
          newSlides[2] = slides[3];
          newSlides[3] = (slides[3] !== this.props.children.length-1) ? slides[3]+1 : 0;
          return {slides: newSlides};
        })
      }, 500);
      if (this.number+1 < this.props.children.length) this.number++;
      else this.number = 0;
      this.activeLine.current.style.left = this.number*8 + 'px';
      this.nextAnimation();
    }
    
  }

  btnPrevOnClick = () => {
    if (this.state.slides.length > 1 && !this.animation) {
      setTimeout(() => {
        this.slide2.current.style.left = this.props.width + 16 + 'px';
        this.slide1.current.style.left = 0 + 'px';
        this.slide0.current.style.left = -this.props.width - 16 + 'px';
        this.setState(({slides}) => {
          let newSlides = [];
          newSlides[3] = slides[2];
          newSlides[2] = slides[1];
          newSlides[1] = slides[0];
          newSlides[0] = (slides[0] !== 0) ? slides[0]-1 : this.props.children.length-1;
          return {slides: newSlides};
        })
      }, 500);
      if (this.number-1 >= 0) this.number--;
      else this.number = this.props.children.length-1;
      this.activeLine.current.style.left = this.number*8 + 'px';
      this.prevAnimation();
    }
  }

  nextAnimation = () => {
    this.animation = true;
    this.slide1.current.style.left = -this.props.width - 16 + 'px';
    this.slide2.current.style.left = 0 + 'px';
    this.slide3.current.style.left = this.props.width + 16 + 'px';
  }

  prevAnimation = () => {
    this.animation = true;
    this.slide2.current.style.left = this.props.width*2 + 16 + 'px';
    this.slide1.current.style.left = this.props.width + 16 + 'px';
    this.slide0.current.style.left = 0 + 'px';
  }

  
  
  render() {
    let style = {};
    let backLineWidth = {width: '16px'}
    if (this.props.children.length > 1) backLineWidth = {width: 16 + (this.props.children.length-1)*8 + 'px'};
    if (this.props.width) style.width = this.props.width + 'px';
    if (this.props.height) style.height = this.props.height + 'px';
    return (
      <div className="slider-wrapper">
        <div className="slider" style={style}>
            {this.state.slides.map((id, index)=> {
            let style = {left: 0};
            if (this.state.slides.length === 1) {
              return (<div key={index} className="banner-slide" style={style} ref={this.slide1}>
                {this.props.children}
              </div>)
            }
            if (index === 0) {
              style = {left: -this.props.width - 16 + 'px'};
              return (<div key={index} className="banner-slide" style={style} ref={this.slide0}>
                {this.props.children[id]}
              </div>)
            }
            else if (index === 2) {
              style = {left: this.props.width + 16 + 'px'};
              return (<div key={index} className="banner-slide" style={style} ref={this.slide2}>
                {this.props.children[id]}
              </div>)
            }
            else if (index === 3) {
              style = {left: this.props.width*2 + 32 + 'px'};
              return (<div key={index} className="banner-slide" style={style} ref={this.slide3}>
                {this.props.children[id]}
              </div>)
            }
            else {
              return (<div key={index} className="banner-slide" style={style} ref={this.slide1}>
                {this.props.children[id]}
              </div>)
            }
          })}
          <div className="button-prev" onClick={()=> this.btnPrevOnClick()}>
            <img src={btnPrev}  alt=""></img>
          </div>
          <div className="button-next" onClick={()=> this.btnNextOnClick()}>
            <img src={btnNext}  alt=""></img>
          </div>
          <div className="active-field">
            <div className="dot"></div>
            <div className="longdot" style={backLineWidth}>
              <div className="activeLine" ref={this.activeLine}></div>
            </div>
            <div className="dot"></div>
        </div>
        </div>
        {/* <div>{num+1}/{this.state.slides.length}</div> */}
        
      </div>
    );
  }
  
}
export default Slider;
