import React from "react";
import './Footer.css';
import {faEnvelope, faHeadset} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo2 from '../../../Images/logo2.png';

export const Footer = () => {
    return (<div className="footer">
        <div className="w-90 is-flex">
            <div className="footer-ubica">
                <p className="ubica-title">Ubicación</p>
                <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
                <p>Alphavile SP</p>
                <p>brasil@corebiz.ag</p>
                <p>+55 11 3090 1039</p>
            </div>
            <div className="footer-contact">
                <button className="btn">
                    <FontAwesomeIcon icon={faEnvelope} color="primary"/>
                    <span className="ml-2">CONTÁCTANOS</span>
                </button>
                <button className="btn">
                    <FontAwesomeIcon icon={faHeadset} color="primary"/>
                    <span className="ml-2">HABLA CON UN CONSULTOR</span>
                </button>
            </div>
            <div className="footer-credits">
                <div className="corebiz-credit">
                    <label>Desarrollado por</label>
                    <img src={logo2} alt="corebiz"/>
                </div>
            </div>
        </div>
    </div>);
}