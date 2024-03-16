import React from "react";
import "../styles/logoInicio.css";
import logoSuperior from "../assets/logo_alba_prado.svg";
import { Link } from "react-router-dom";

const logoInicio = () => {
    return (
        <div id="logoInicio">
            <Link to={"/"}>        
                <img src={logoSuperior} alt="LogoInicio"></img>       
            </Link>
        </div>
    )
}

export default logoInicio;
