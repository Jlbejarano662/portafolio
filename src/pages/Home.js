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
      <section className="container section">
        <div className="title">
          <h2>Datos Académicos</h2>
        </div>
        <div className="academic-info">
          <h6>Desarrollo Web Full Stack</h6>
          <p>Prográmate Academy</p>
          <p>Bogotá, Agosto 2022 - Marzo 2023</p>
        </div>
        <div className="academic-info">
          <h6>Técnologo en Análisis y Desarrollo de Sistemas de Información</h6>
          <p>Servicio Nacional de Aprendizaje - SENA</p>
          <p>Bogotá, Mayo 2020 - Mayo 2023</p>
        </div>
        <div className="academic-info">
          <h6>Ingeniería de Minas</h6>
          <p>Universidad Pedagógica y Tecnológica de Colombia</p>
          <p>Sogamoso, Agosto 2016 - Febrero 2023</p>
          <p className="recognitions">Reconocimientos:</p>
          <ul>
            <li>
              Monitor Categoría A para el área de Sistemas de la Escuela de
              Ingeniería de Minas, Semestre 2021 - II y 2022 - I.
            </li>
          </ul>
        </div>
      </section>
      <section className="container section">
        <div className="title">
          <h2>Formación Complementaria</h2>
        </div>
        <div className="academic-info">
          <h6>Universidad del Rosario - Samsung</h6>
          <p>2023 - Samsung Innovation Campus 2022 - Python</p>
        </div>
        <div className="academic-info">
          <h6>Universidad de los Andes</h6>
          <p>2022 - Conceptos Básicos en la Nube - AWS</p>
        </div>
        <div className="academic-info">
          <h6>Universidad del Norte - MisiónTic2022</h6>
          <p>2021 - Desarrollo de Software</p>
        </div>
        <div className="academic-info">
          <h6>Alianza Unicafam - IYF - Google</h6>
          <p>2021 - Soporte de Técnologías de la Información</p>
        </div>
      </section>
      <section className="container section">
        <div className="title">
          <h2>Proyectos</h2>
        </div>
      </section>
      <section className="container section">
        <div className="title">
          <h2>Datos de Contacto</h2>
        </div>
        <div className="contact-data">
          <BsPhoneFill />{" "}
          <p className="px-2"> (+57) 3157513152 - (+57) 3156235218</p>
        </div>
        <div className="contact-data">
          <BsEnvelopeFill /> <p className="px-2"> Jlbejarano662@gmail.com</p>
        </div>
        <div className="contact-data">
          <BsLinkedin />{" "}
          <p className="px-2">www.linkedin.com/in/jazmín-bejarano-ibañez</p>
        </div>
        <div className="contact-data">
          <BsGithub /> <p className="px-2">https://github.com/Jlbejarano662</p>
        </div>
      </section>
    </>
  );
}

export default Home;
