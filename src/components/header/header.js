import './header.css';
import logo from '../../img/logo.svg';
import circles from '../../img/circles-group.svg';
import ellipse from '../../img/ellipse.svg';
import videoPicture from '../../img/video-pic.png';
import playBtn from '../../img/play-btn.svg';


function Header() {
  return (
    <header>
        <img src={logo} className="logo"/>
        <div className="wrapper">
            <img src={circles} className="circles"></img>
            <img src={ellipse} className="ellipse"></img>
            <div className="video">
                <img src={videoPicture} className="video-pic"></img>
                <div className="play">
                    <img src={playBtn} className="play-btn"></img>
                </div>
            </div>
        </div>
    </header>
  );
}
export default Header;
