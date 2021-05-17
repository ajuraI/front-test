import './modal-window.css';
import closeBtn from '../../img/btn-close.svg';
import closeBtn2 from '../../img/btn-close-2.svg';

function ModalWindow(props) {

  const {close, state, type, children} = props;
  
  return (
    <>
      {state && type === 1 && <div className="modal-window-bg">
        <div className="modal-wondow">
          {children}
          <button className="close-btn" onClick={()=> close()}><img src={closeBtn} alt=""></img></button>
        </div>
      </div>}
      {state && type === 2 && <div className="modal-window-bg">
        <div className="modal-window-wrapper">
          <div className="modal-window-2">
            {children}
          </div>
          <button className="close-btn-2" onClick={()=> close()}><img src={closeBtn2} alt=""></img></button>
        </div>
      </div>}
    </>
  );
}
export default ModalWindow;


