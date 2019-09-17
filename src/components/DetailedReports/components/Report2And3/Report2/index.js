import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from '@fortawesome/free-regular-svg-icons'
import './styles.scss';

const Report2 = () => (
    <figure className="report2">
        <div className="report2Circle">
            <FontAwesomeIcon icon={faCircle} size = "8x" />
        </div>
        <figcaption>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</figcaption>
    </figure>
);

export default Report2;