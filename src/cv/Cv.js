import React, { Component } from "react";
import CvMenu from "./CvMenu";
import "../styles/contact.css";
import Boton from "./Boton"

export default class Cv extends Component {
  render () {
  return (
    <>
      <Boton />
      <CvMenu />
    </>
  );
};
};