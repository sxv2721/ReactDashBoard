import React from "react";
import './styles.scss';
import Report1 from './components/Report1';
import Report2And3 from './components/Report2And3';

const DetailedReports = () => (
    <section className="reports">
        <h3 className="detailedReportsTitle">Detailed Reports</h3>
        <Report1 />
        <Report2And3 />
    </section>
);

export default DetailedReports;