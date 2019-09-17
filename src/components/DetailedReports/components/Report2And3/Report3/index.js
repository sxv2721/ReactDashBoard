import React from "react";
import './styles.scss';
import BarLine from './components/Barline';

const Report3 = () => (
    <div className="report3">
        <BarLine name = "Illinois" nums = "524" />
        <BarLine name = "Washington" nums = "722" />
        <BarLine name = "Mississippi" nums = "173" />
        <BarLine name = "California" nums = "945" />
        <BarLine name = "Maryland" nums = "553" />
        <BarLine name = "Alaska" nums = "912" />
    </div>
);

export default Report3;