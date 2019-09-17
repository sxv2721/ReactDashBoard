import React from "react";
import ChartMenu from './components/ChartMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar} from '@fortawesome/free-regular-svg-icons'
import './styles.scss';


const Chart = () => (
  <figure className="chart">
    <h4 className="chartTitle">Sales Details</h4>
    <figcaption className="chartText"> lorem ipsum dolor</figcaption>
    <div className="chartImg">
      <FontAwesomeIcon icon={faChartBar} size = "6x" />
    </div>
    <ChartMenu />
  </figure>
);
export default Chart;