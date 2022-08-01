import {Carousel} from "react-responsive-carousel";
import './HomeCarousel.css';
import banner1 from '../../../Images/shop1.jpg';
import banner2 from '../../../Images/shop2.jpg';
import banner3 from '../../../Images/shop3.jpg';

export const HomeCarousel = () => {
    const tooglesGroupId = 'Toggles';
    const valuesGroupId = 'Values';
    const mainGroupId = 'Main';
    const getConfigurableProps = () => ({
        showArrows: false,
        showIndicators: true,
        infiniteLoop: true,
        showThumbs: false,
        useKeyboardArrows: false,
        autoPlay: true,
        stopOnHover: true,
        swipeable: true,
        dynamicHeight: false,
        emulateTouch: true,
        autoFocus: true,
        thumbWidth: 0,
        selectedItem: 0,
        interval: 5000,
        transitionTime: 500,
        swipeScrollTolerance: 5,
        ariaLabel: undefined,
    });

    return (<div className="homeCarousel">
        <Carousel {...getConfigurableProps()} showStatus={false}>
            <div>
                <div className="banner">
                    <div className="banner-message">
                        <label className="banner-title">¡Hola! ¿Qué es lo que buscas?</label>
                        <p className="banner-content">Crear o migrar tu comercio electrónico?</p>
                    </div>
                    <div><img src={banner1} className="" alt="logo" /></div>
                </div>
            </div>
            <div>
                <div className="banner">
                    <div className="banner-message">
                        <label className="banner-title">¡Hola! ¿Qué es lo que buscas?</label>
                        <p className="banner-content">Crear o migrar tu comercio electrónico?</p>
                    </div>
                    <div><img src={banner2} className="" alt="logo" /></div>
                </div>
            </div>
            <div>
                <div className="banner">
                    <div className="banner-message">
                        <label className="banner-title">¡Hola! ¿Qué es lo que buscas?</label>
                        <p className="banner-content">Crear o migrar tu comercio electrónico?</p>
                    </div>
                    <div><img src={banner3} className="" alt="logo" /></div>
                </div>
            </div>
        </Carousel>
    </div>);
}