import React from "react";
import './styles.scss';

const TopBox = (props) => (
    <section className="topBox">
        <h4 className="topBoxTitle" >
            {props.title}
        </h4>
        <div className="topBoxImg">{props.icon}</div>
        <h3 className="topBoxNums">{props.nums}</h3>
        <p className="topBoxSmall">
            <small style={{ color: props.textColor }} >{props.small1}</small>
            <small>{props.small2}</small>
        </p>
    </section>
);


export default TopBox;