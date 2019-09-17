import React from "react";
import TopBox from "./components/TopBox";
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faPortrait } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'

export const TopBoxes = ({sales, revenue, downloads, returns}) => (
  <section className="topBoxes">
    <TopBox title="Sales"
      icon = {<FontAwesomeIcon icon={faCalendar} size = "lg" />}
      nums={sales.total}
      textColor="red"
      small1="0.12%"
      small2="(30 days)"
    />
    <TopBox 
      title="Revenue"
      icon = {<FontAwesomeIcon icon={faPortrait} size = "lg" />}
      nums={revenue.total}
      textColor="red"
      small1="0.47%"
      small2="(30 days)"
    />
    <TopBox 
      title="Downloads"
      icon = {<FontAwesomeIcon icon={faArrowAltCircleDown} size = "lg" />}
      nums={downloads.total}
      textColor="green"
      small1="64.00%"
      small2="(30 days)"
    />
    <TopBox
      title="Returns"
      icon = {<FontAwesomeIcon icon={faLayerGroup} size = "lg" />}
      nums={returns.total}
      textColor="green"
      small1="23.00%"
      small2="(30 days)"
    />
  </section>);