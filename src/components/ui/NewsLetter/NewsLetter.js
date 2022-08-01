import React, {useState} from "react";
import './NewsLetter.css';
import {axiosInstance} from "../../../hoc/axios";
import { toast } from 'react-toastify';

export const NewsLetter = ({testSubmit}) => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [validateEmail, setValidateEmail] = useState(false);

    const validatingEmail = (email) => {
        setValidateEmail(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email));
    }

    const disableLoginButton = () => {
        if (username.trim() === "" || email.trim() === "" || !validateEmail) {
            return true;
        } else {
            return false;
        }
    }

    const nameHandle = (e) => {
        setUserName(e.target.value);
    }

    const emailHandle = (e) => {
        setEmail(e.target.value);
        validatingEmail(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let data = {
            "email": email,
            "name": username
        };
        let response = await axiosInstance.post("newsletter", data);
        if (response.status){
            toast.success(response?.data?.message??"");
        } else {
            toast.error("Ocurrió un error al intentar subscribirse");
        }
        setUserName("");
        setEmail("");
    }

    return (<div className="news-letter">
        <div className="w-90">
            <p className="news-letter-title">¡Únete a nuestras novedades y promociones!</p>
            <form onSubmit={testSubmit??onSubmit}>
                <input name="name" className="input" placeholder="Ingresa tu nombre" value={username} onChange={(e)=>nameHandle(e)}/>
                <input name="email" className="input" placeholder="Ingresa tu mail" value={email} onChange={(e)=>emailHandle(e)}/>

                <button type="submit" className="btn-submit" disabled={disableLoginButton()}>
                    Suscribirme
                </button>
            </form>
        </div>
    </div>);
}