import React, {useEffect, useState} from "react";
import './ItemList.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {toast} from "react-toastify";

export const ItemList = ({cartQuantity, setCartQuantity, items}) => {
    const [cardSelected, setCardSelected] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const Stars = ({stars}) => {
        let startsDom = [];
        for(let i=0;i<5;i++){
            startsDom.push(<FontAwesomeIcon key={i} className={"strokeBorder-black"+(stars>0?" checked":"")} icon={faStar} color="primary"/>);
            stars--;
        }
        return <div>
            {startsDom}
        </div>
    }

    const onCardHandler = (e, id) => {
        setCardSelected(id);
    }

    const addCartHandler = (e) => {
        e.preventDefault();
        setCartQuantity(cartQuantity+1);
        toast.success("Se agregó el artículo al carro");
    }

    const ItemCard = (item) => {

        return <div key={item?.productId??0} className={"card" + (cardSelected===(item?.productId??0)?" selected":"")} onClick={(e)=>{onCardHandler(e, item?.productId)}}>
            <div className={"card-header"+((item?.productId===2||item?.productId===3)?" off":"")}>
                <img src={item?.imageUrl} />
            </div>
            <div className="card-body">
                <label className="card-title">{item?.productName}</label>
                <Stars stars={item?.stars}/>
                {item?.listPrice?<p className="card-subtitle">de {item?.listPrice.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}</p>:null}
                <p className="card-price">Por $ {item?.price}</p>
                {item?.installments?.length>0?(
                    item?.installments.map(installment=>(
                        <p className="card-installment">ou em {installment?.quantity??0}x de R$ {installment?.value.toLocaleString('en-US')}</p>
                    ))
                ):null}
            </div>
            <div className="card-footer">
                {cardSelected===(item?.productId??0)?
                    <button className="btn-sale" onClick={(e)=>addCartHandler(e)}>COMPRAR</button>
                    :null
                }
            </div>
        </div>;
    }

    return (<div>
        <Carousel swipeable={true}
                  draggable={true}
                  showDots={isMobile}
                  infinite={false}
                  autoPlay={false}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                responsive={responsive}>
            {items?.map(item => ItemCard(item))}
        </Carousel>
    </div>);
}