import React from "react";
import './styles.scss';

const BarLine = (props) => (
    <div className = "barLine">
        <h5 className = "barName">{props.name}</h5>
        <progress value = {props.nums} max = "1000" className = "bar"></progress>
        <h5 className = "barNums">{props.nums}</h5>
    </div>
);
export default BarLine;