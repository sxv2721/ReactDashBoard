import React from "react";
import DateDropDown from './DateDropDown';
import ViewAllButton from './ViewAllButton';
import './styles.scss';

const ChartMenu = (props) =>(
    <div className="chartMenu">
        <DateDropDown />
        <ViewAllButton />
    </div>
);

export default ChartMenu;