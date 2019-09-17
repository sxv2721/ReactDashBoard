import React from "react";
import './styles.scss';

const ViewAllButton = (props) => (
    <form className="viewAll">
        <input type="submit" name="ViewAll" value="View All" className="viewButton"/>
    </form>
);

export default ViewAllButton;