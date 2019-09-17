import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'
import './styles.scss';

const DateDropDown = () => (
  <>
  <select className="date">
    <option className="dateOption">Today</option>
    <option className="dateOption">Tomorrow</option>
  </select>

  <FontAwesomeIcon icon={faCaretDown} className = "dateCaret" size = "lg"/>
  </>
);

export default DateDropDown;