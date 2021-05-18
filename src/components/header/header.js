import './header.css';
import logo from '../../img/logo.webp';
import circles from '../../img/circles-group.svg';
import ellipse from '../../img/ellipse.svg';
import videoPicture from '../../img/video-pic.webp';
import playBtn from '../../img/play-btn.svg';
import { useState } from 'react';
import ModalWindow from '../../components/modal-window';
import ImgWebp from '../img-webp'


function Header() {


  const [modal, setModalState] = useState(false);

  const onClickVideo = () => {
    setModalState(true);
  }

  return (
    <header>
        {/* <img src={logo} className="logo"  alt=""/> */}
        <ImgWebp srcWebp={logo} alt=""/>
        <div className="wrapper">
            <img src={circles} className="circles"  alt=""></img>
            <img src={ellipse} className="ellipse"  alt=""></img>
            <div className="video" onClick={()=> onClickVideo()}>
                {/* <img src={videoPicture} className="video-pic"  alt=""></img> */}
                <ImgWebp srcWebp={videoPicture} alt=""/>
                <div className="play">
                    <img src={playBtn} className="play-btn"  alt=""></img>
                </div>
            </div>
        </div>
        <ModalWindow state={modal} close={()=> setModalState(false)} type={1}>
          <div className="ytVideo">
            <iframe title="video" id="video" width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;picture-in-picture" allowFullScreen></iframe>
          </div>
        </ModalWindow>
    </header>
  );
}
export default Header;
