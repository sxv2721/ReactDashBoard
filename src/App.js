import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import NavBar from './components/NavBar';
import Header from './components/Header';
import {TopBoxes} from './components/TopBoxes';
import ChartPurchases from './components/ChartPurchases';
import ProductToDoList from './components/ProductToDoList';
import DetailedReports from './components/DetailedReports';
import Footer from './components/Footer';
import './App.scss';
import "./highcharts-compare-data-using-column-chart.png"

const App = ({sales, revenue, downloads, returns}) => (
  <>
    <NavBar />
    <Header />
    <main>
      <TopBoxes 
        sales={sales} 
        revenue={revenue}
        downloads={downloads} 
        returns={returns}
      />
      <ChartPurchases />
      <ProductToDoList />
      <DetailedReports />
    </main>
    <Footer />
  </>

);
App.defaultProps = {
  sales:{
    total: 34040
  },
  revenue: {
    total: 47033
  },
  downloads: {
    total: 40016
  },
  returns: {
    total: 61344
  }
}
App.propTypes = {
  sales: PropTypes.shape({
    total: PropTypes.number.isRequired,
  }).isRequired,
  revenue: PropTypes.shape({
    total: PropTypes.number.isRequired,
  }).isRequired,
  downloads: PropTypes.shape({
    total: PropTypes.number.isRequired,
  }).isRequired,
  returns: PropTypes.shape({
    total: PropTypes.number.isRequired,
  }).isRequired,
}

export default App;
