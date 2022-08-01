import React, {useEffect, useState} from "react";
import './App.css';
import {Home} from "./containers/Home/Home";
import { ToastContainer} from 'react-toastify';
import {Header} from "./components/ui/Header/Header";
import {Footer} from "./components/ui/Footer/Footer";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [cartQuantity, setCartQuantity] = useState(()=>{
        const json = localStorage.getItem("cartQuantity");
        return JSON.parse(json);
    });

    useEffect(() => {
        const json = JSON.stringify(cartQuantity);
        localStorage.setItem("cartQuantity", json);
    }, [cartQuantity]);

    return (
        <div className="App">
            <Header cartQuantity={cartQuantity} className="w-90"/>
            <ToastContainer/>
            <Home cartQuantity={cartQuantity} setCartQuantity={setCartQuantity}/>
            <Footer/>
        </div>
    );
}

export default App;
