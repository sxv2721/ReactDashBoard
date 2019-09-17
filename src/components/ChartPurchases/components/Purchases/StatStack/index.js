import React from 'react';
import './styles.scss';

const StatStack = (props) => (
  <div className="statStack">
    <h5 className="stackTitle">{props.title}</h5>
    <h3 className="stackNums">{props.num}</h3>
  </div>
);
export default StatStack;