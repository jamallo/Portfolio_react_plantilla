import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import casa from "../assets/casa.png";
import deadEye from "../assets/cognitivo.png";
import stack from "../assets/bolsa-de-negocios.png";
import cv from "../assets/cv.png"
import envelope from "../assets/comunicar.png";
import "../styles/nav.css";

export default function Nav() {
  const location = useLocation();

  const getNavPositionClass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/presentacion5":
        return "nav-projects";
      case "/presentacion4":
        return "nav-projects";
      case "/presentacion3":
        return "nav-projects";
      case "/presentacion2":
        return "nav-projects";
      case "/presentacion1":
        return "nav-projects";
      case "/cv":
        return "nav-cv"
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "INICIO";
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROYECTOS";
      case "/cv":
        return "CV"
      case "/contact":
        return "CONTACTO";
      default:
        return "";
    }
  };

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass;
  };

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link";

    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };

  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink(
        "/",
        casa,
        "inicio casa icon",
        "nav-about"
      )}
      {renderNavLink("/skills", deadEye, "deadEye icon", "nav-skills")}
      {renderNavLink("/projects", stack, "stack icon", "nav-projects")}
      {renderNavLink("/cv", cv, "cv icon", "nav-cv")}
      {renderNavLink("contact", envelope, "envelope icon", "nav-contact")}
    </nav>
  );
}
