import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import './SearchInput.css';

export const SearchInput = () => {
    return (
        <div className="searchInput">
            <div className="searchInput-container">
                <input className="search" placeholder="¿Qué estás buscando?"/>
                <button>
                    <FontAwesomeIcon className="mr-2" icon={faSearch} color="primary"/>
                </button>
            </div>
        </div>
    );
}