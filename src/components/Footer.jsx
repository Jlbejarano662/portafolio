import React from "react";
// import styles
import './Footer.css'
// import icon
import {BsFillHeartFill} from "react-icons/bs"


function Footer() {
  return (
    <div className="text-center p-4 copyright">
      Creado con <BsFillHeartFill/> por <b className="text-reset fw-bold">Jazmin Bejarano</b>
    </div>
  );
}

export default Footer;
