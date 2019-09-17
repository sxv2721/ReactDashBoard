import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBell, faPortrait, faHandLizard } from '@fortawesome/free-solid-svg-icons'
import './styles.scss';


export const SideMenu = ({ display }) => {
    const displayMenu = {
        visibility: 'visible'
    }
    const noDisplay = {
        visibility: 'hidden'
    }
    return (
        <div className="sideMenu" style = {display===true ? displayMenu:noDisplay}>
            <FontAwesomeIcon icon={faEnvelope} className="sideIcons" size="lg"/>
            <FontAwesomeIcon icon={faBell} className="sideIcons" size="lg" />
            <FontAwesomeIcon icon={faPortrait} className="sideIcons" size="lg" />
            <FontAwesomeIcon icon={faHandLizard} className="sideIcons"  size="lg"/>
        </div>
    );
}