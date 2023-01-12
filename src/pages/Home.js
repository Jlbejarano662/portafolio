import React from "react";
import "./Home.css";
// import icon
import { BiMobile } from "react-icons/bi";
import {BsLinkedin, BsGithub, BsEnvelopeFill} from "react-icons/bs"

function Home() {
  return (
    <section className="container slider d-flex py-5">
      <div className="contact">
        <BiMobile fill="#05A6A6"/> 
        <BsEnvelopeFill fill="#05A6A6"/> 
        <BsLinkedin fill="#05A6A6"/> 
        <BsGithub fill="#05A6A6"/> 
      </div>
      <div className="row align-self-end buttons">
        <div className="col d-flex flex-row">
          <button className="btn btn-aqua btn-lg">Portafolio</button>
        </div>
        <div className="col d-flex flex-row-reverse">
          <button className="btn btn-purple btn-lg">Descargar CV</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
