import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBell, faPortrait, faBars } from '@fortawesome/free-solid-svg-icons'
import './styles.scss';
import { SideMenu } from './components/SideMenu';


class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            display: false
        }
        this.expand = this.expand.bind(this);
    }
    expand = (event) => {
        this.setState({
            display: !this.state.display
        })
    }

    render = () => (
        <>
            <nav>
                <span className="leftGroup" role="img" aria-label="emoji">😀</span>
                <div className="rightGroup">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faBell} />
                    <FontAwesomeIcon icon={faPortrait} />
                    <button className="hamburgerMenu" onClick={this.expand}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                </div>
            </nav>
            <SideMenu display={this.state.display} />
        </>
    );

}

export default NavBar;