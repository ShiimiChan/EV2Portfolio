import Navbar from '../organisms/Navbar'
import GaleriaProyectos from '../organisms/GaleriaProyectos.jsx'
import Formulario from '../organisms/Formulario.jsx'
import Footer from '../organisms/Footer'
import perfil from '../../assets/profile/perfil.JPG'
import {SolutionOutlined, CalendarOutlined, BankOutlined, ReadOutlined, StarOutlined,} from "@ant-design/icons";

// Define la plantilla que organiza todo el portafolio.
function PortfolioTemplate() {
    return (
        <>
            {/* Barra de navegación con los enlaces a las secciones. */}
            <Navbar />

            <main>
                {/*Sección Sobre mi */}
                <section id="sobre-mi" className="about-section">
                    <div className="about-content">
                        <img
                            src={perfil}
                            alt="Foto de perfil de Silvana"
                            className="foto-perfil"
                        />

                        <div className="about-text">
                            <span className="section-label">CONÓCEME</span>

                            <h2>Hola,</h2>

                            <h1>Soy Silvana Reyes Acchiardi</h1>

                            <h2>Sobre mí</h2>

                            <p>
                                Soy estudiante de Analista Programador en Duoc UC y
                                actualmente me encuentro desarrollando mi formación
                                profesional en el área de tecnologías de la información.
                            </p>

                            <p>
                                Mi experiencia práctica comenzó con una oportunidad como
                                Trainee Desarrolladora en OxigenCL, donde participé en
                                tareas de mantenimiento y actualización de sitios web,
                                realicé modificaciones básicas utilizando PHP y trabajé
                                con información almacenada en bases de datos MySQL.
                            </p>

                            <p>
                                Durante mi formación académica he trabajado con Java,
                                Kotlin, Python, JavaScript, React, Spring Boot, SQL,
                                MySQL, Oracle y bases de datos relacionales. También he
                                desarrollado proyectos de aplicaciones móviles,
                                desarrollo web, APIs y programación orientada a objetos.
                            </p>

                            <p>
                                Además, he comenzado a formarme en fundamentos de
                                ciberseguridad, área que me interesa especialmente.
                                Me considero una persona autodidacta, curiosa y con
                                muchas ganas de seguir aprendiendo.
                            </p>

                            <p>
                                Actualmente estoy enfocada en adquirir experiencia
                                profesional en el área TI y estoy abierta a oportunidades
                                de práctica que me permitan aplicar mis conocimientos
                                y continuar desarrollándome.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Sección de experiencia laboral */}
                <section id="experiencia" className="seccion-experiencia">
                    <div className="titulo-seccion">
                        <span className="icono-seccion">
                            <SolutionOutlined />
                        </span>

                        <h2>Experiencia laboral</h2>
                    </div>

                    <div className="experiencia-card">
                        <div className="experiencia-icono">
                            <BankOutlined />
                        </div>

                        <div className="experiencia-contenido">

                            <h3>Trainee Desarrolladora</h3>
                            <h4>OxigenCL</h4>

                            <p>
                                Experiencia orientada al aprendizaje y al desarrollo
                                de habilidades en el área tecnológica.
                            </p>

                            <ul>
                                <li> Apoyo en el mantenimiento y actualización de un sitio web.</li>
                                <li>Realización de modificaciones menores utilizando PHP.</li>
                                <li>Apoyo en la puesta en marcha y revisión de sitios web.</li>
                                <li>Consulta y revisión de información almacenada en bases de datos MySQL.</li>
                                <li>Adquisición de experiencia práctica en desarrollo web y manejo de bases de datos.</li>
                            </ul>

                            <div className="dato-experiencia">
                                <CalendarOutlined />
                                <span>Abril 2024 / Octubre 2024</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección de formación académica */}
                <section id="estudios" className="seccion-estudios">
                    <div className="titulo-seccion">
                        <span className="icono-seccion">
                            <ReadOutlined />
                        </span>

                        <h2>Estudios</h2>
                    </div>

                    <div className="estudios-card">
                        <div className="estudios-icono">
                            <ReadOutlined />
                        </div>

                        <div className="estudios-contenido">
                            <span className="etiqueta-seccion">
                                Formación académica
                            </span>

                            <h3>Analista Programador</h3>
                            <h4>
                                <BankOutlined /> Duoc UC
                            </h4>

                            <p>
                                Actualmente estoy cursando mi formación en programación
                                y desarrollo de software.
                            </p>

                            <div className="dato-estudios">
                                <StarOutlined />
                                <span>Aprendizaje y crecimiento continuo</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Sección Proyectos */}
                <section id="proyectos">
                    <h2>Proyectos</h2>
                    <GaleriaProyectos />
                </section>

                {/*Sección contacto y formulario */}
                <section id="contacto">
                    <h2>Contacto</h2>

                    <p>
                        ¡Escríbeme!
                    </p>

                    {/* Inserta el formulario de contacto. */}
                    <Formulario />
                </section>

            </main>

            {/* Pie de página que se muestra después del contenido principal. */}
            <Footer />
        </>
    )
}

export default PortfolioTemplate