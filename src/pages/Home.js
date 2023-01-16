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
// import images
import backend from "../img/backend.png";
import dataBase from "../img/dataBase.png";
import frontend from "../img/frontend.png";
import others from "../img/others.png";

function Home() {
  return (
    <>
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
              <h1>
                Soy <br></br> Jazmin Bejarano
              </h1>
              <h5 className="ellipse-text">Desarolladora web full-stack</h5>
            </center>
          </div>
        </div>
        <div className="row align-self-end buttons">
          <div className="col d-flex flex-row">
            <button className="btn btn-aqua btn-lg" disabled>
              Portafolio
            </button>
          </div>
          <div className="col d-flex flex-row-reverse">
            <a
              className="btn btn-purple btn-lg"
              href="./JazminBejaranoIbañez-CV.pdf"
              target={"_blank"}
            >
              Descargar CV
            </a>
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="title">
          <h2>Sobre Mi</h2>
        </div>
        <p>
          Técnologa en Análisis y Desarrollo de Sistemas de Información, con
          capacidades en desarrollo web (frontend y backend). Creativa,
          autodidacta, líder con excelente capacidad para enfocar el proceso de
          desarrollo a partir del análisis de las necesidades del cliente.
        </p>
      </section>
      <section className="container section">
        <div className="title">
          <h2>Habilidades Técnicas</h2>
        </div>
        <div className="row skills">
          <div className="col skills-images">
              <img src={backend}></img>
          </div>
          <div className="col">
            <h6>Backend</h6>
            <ul>
              <li>Java</li>
              <li>Sprint Boot</li>
              <li>PHP</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
        <div className="row skills">
          <div className="col skills-images">
              <img src={dataBase}></img>
          </div>
          <div className="col">
            <h6>Base de datos</h6>
            <ul>
              <li>SQL Server</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
        <div className="row skills">
          <div className="col skills-images">
              <img src={frontend}></img>
          </div>
          <div className="col">
            <h6>Fronted</h6>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Booptstrap</li>
            </ul>
          </div>
        </div>
        <div className="row skills">
          <div className="col skills-images">
              <img src={others}></img>
          </div>
          <div className="col">
            <h6>Otras Herramientas</h6>
            <ul>
              <li>Figma</li>
              <li>GitHub</li>
              <li>Postman</li>
              <li>Trello</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
