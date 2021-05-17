import './drop-down.css';
import { useState } from 'react';
import CaretDown from '../../img/CaretDown.svg';



function DropDown(props) {

  const [state, setState] = useState(0);
  const [value, setValue] = useState(props.value);


  

  const dropClick = (value, idx) => {
    setValue(value);
    setState(0);
    props.upValue(idx);
  }

  const dropDown = () => {
    setState(1);
  }

  return (
    <>
      <div className="drop-down-component">
        <div className="drop-down-wrapper">
          <div className = "drop-down" onClick={()=> dropDown()}>
            {value}
            <img src={CaretDown} alt="" />
          </div>
          {state === 1 && <ul className="drop-down-list">{props.children.map((el,idx)=> {
            return <li key={idx} onClick={()=> dropClick(el.props.children, idx)}>{el.props.children}</li>})}
          </ul>}
        </div>
        
      </div>
    </>
    
  );
}
export default DropDown;
