import React from "react";
import Chart from './components/Chart';
import Purchases from './components/Purchases';
import './styles.scss';



const ChartPurchases = () => (
    <section className="chartPurchases">
        <Chart />
        <Purchases />
    </section>
);
export default ChartPurchases;