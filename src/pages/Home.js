import React from "react";
//import styles
import "./Home.css";
// import icons
import {
  BsPhoneFill,
  BsLinkedin,
  BsGithub,
  BsEnvelopeFill,
} from "react-icons/bs";

function Home() {
  return (
    <section className="container slider d-flex">
      <div className="contact">
        <BsPhoneFill
          onClick={() => window.open("https://wa.me/573157513152", "_blank")}
        />

        <BsEnvelopeFill
          onClick={() =>
            window.open("mailto:jlbejarano662@gamil.com", "_blank")
          }
        />

        <BsLinkedin
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/jazm%C3%ADn-bejarano-iba%C3%B1ez/",
              "_blank"
            )
          }
        />
        <BsGithub
          onClick={() =>
            window.open("https://github.com/Jlbejarano662", "_blank")
          }
        />
      </div>
      <div className="ellipse">
        <div>
          <h4 className="ellipse-text">¡Hola!</h4>
          <center>
            <h1 >
              Soy <br></br> Jazmin Bejarano
            </h1>
            <h5 className="ellipse-text">Desarolladora web full-stack</h5>
          </center>
        </div>
      </div>
      <div className="row align-self-end buttons">
        <div className="col d-flex flex-row">
          <button className="btn btn-aqua btn-lg" disabled>Portafolio</button>
        </div>
        <div className="col d-flex flex-row-reverse">
          <a className="btn btn-purple btn-lg" href="./JazminBejaranoIbañez-CV.pdf" target={"_blank"} >Descargar CV</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
