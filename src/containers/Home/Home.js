import React, {useEffect, useState} from 'react';
import './Home.css';
import {Header} from "../../components/ui/Header/Header";
import {HomeCarousel} from "../../components/ui/HomeCarousel/HomeCarousel";
import {ItemList} from "../../components/ui/ItemList/ItemList";
import {NewsLetter} from "../../components/ui/NewsLetter/NewsLetter";
import {axiosInstance} from "../../hoc/axios";

export const Home = ({cartQuantity,setCartQuantity}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function getData() {
            let response = await axiosInstance.get("/products");
            if (response.data){
                setItems([...response.data]);
            }
        }
        getData();
    },[]);

    return (
        <div className="Home-container">
            <HomeCarousel/>
            <div className="w-90 section">
                <p className="section-title">Más Vendidos</p>
                <ItemList cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} items={items} />
            </div>
            <NewsLetter />
        </div>
    );
}