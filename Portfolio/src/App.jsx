import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')



  return (
    <>
      <section id="center">
        <div>
          <nav>

            <button
                type="button"
                className="sobremi"
            >
              Sobre Mi
            </button>
            <button
                type="button"
                className="experiencia"
            >
              Mi Experiencia
            </button>

            <button
                type="button"
                className="proyectos"
            >
              Mis Proyectos
            </button>

            <button
                type="button"
                className="Contacto"
            >
            >
              Contacto
            </button>
          </nav>
        </div>
        <div className="hero">
          <h6>Hola, soy </h6>
          <h1>Silvana Reyes Acchiardi</h1>
          <h3>Sobre mi</h3>
          <p>Soy estudiante de Analista Programador en Duoc UC y actualmente me encuentro desarrollando mi formación profesional en el área de tecnologías de la información.
            Mi experiencia práctica comenzó con una oportunidad como Trainee Desarrolladora en OxigenCL, donde participé en tareas de mantenimiento y actualización de sitios web, realicé modificaciones básicas utilizando PHP y trabajé con información almacenada en bases de datos MySQL. Esta experiencia me permitió conocer de cerca el desarrollo de soluciones web y despertar aún más mi interés por el área tecnológica.Durante mi formación académica he trabajado con distintas tecnologías y herramientas, incluyendo Java, Kotlin, Python, JavaScript, React, Spring Boot, SQL, MySQL, Oracle y bases de datos relacionales. También he desarrollado proyectos relacionados con aplicaciones móviles, desarrollo web, APIs, programación orientada a objetos y gestión de datos.Además, he comenzado a formarme en fundamentos de ciberseguridad, área que actualmente me interesa especialmente y en la que me gustaría seguir creciendo profesionalmente. Me considero una persona autodidacta, curiosa y con muchas ganas de seguir aprendiendo. Actualmente estoy enfocada en adquirir experiencia profesional en el área TI y estoy abierta a oportunidades de práctica que me permitan aplicar mis conocimientos, aprender de equipos con experiencia y continuar desarrollándome profesionalmente.</p>
        </div>
        <div>
          <h2> Experiencia Laboral</h2>
          <p >Trainee Desarrolladora — OxigenCL
            • Apoyo en el mantenimiento y actualización de un sitio web.
            • Realización de modificaciones menores utilizando PHP.
            • Apoyo en la puesta en marcha y revisión de sitios web.
            • Consulta y revisión de información almacenada en bases de datos MySQL.
            • Adquisición de experiencia práctica en desarrollo web y manejo de bases de datos.</p>

        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/ShiimiChan" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
