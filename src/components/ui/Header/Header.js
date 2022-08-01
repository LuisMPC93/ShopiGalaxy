//import logo from '../../../logo.svg';
import logo from '../../../Images/logo.jpg';
import './Header.css';
import {SearchInput} from "../SearchInput/SearchInput";
import {faUser, faShoppingCart, faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Header = ({cartQuantity,className}) => {
    return (
        <div className="header-content">
            <div className={"Header-desktop "+className}>
            <img src={logo} className="logo" alt="logo" />
            <SearchInput/>
            <button className="btn btn-dismissed">
                <FontAwesomeIcon className="mr-2" icon={faUser} color="primary"/>
                <span className="ml-2">Mi usuario</span>
            </button>
            <button className="btn btn-dismissed">
                <FontAwesomeIcon className="mr-2" icon={faShoppingCart} color="primary"/>
                {cartQuantity>0?<span className="countCart">{cartQuantity}</span>:null}
            </button>
        </div>
            <div className={"Header-mobil "+className}>
                <button className="btn btn-dismissed menu">
                    <FontAwesomeIcon className="mr-2" icon={faBars} color="primary"/>
                </button>
                <img src={logo} className="logo" alt="logo" />
                <button className="btn btn-dismissed">
                    <FontAwesomeIcon className="mr-2" icon={faShoppingCart} color="primary"/>
                    {cartQuantity>0?<span className="countCart">{cartQuantity}</span>:null}
                </button>
                <SearchInput/>
            </div>
        </div>
    );
}