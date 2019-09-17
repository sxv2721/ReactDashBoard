import React from "react";
import './styles.scss';

const Header = () => (
    <header>
        <h3 className="dashbar">Dashboard</h3>
        {/*<form className="reportForm">
            <input type="submit" className="report" value="Report" />
        </form>*/}
        <button className="report">Report</button>
    </header>
);


export default Header;