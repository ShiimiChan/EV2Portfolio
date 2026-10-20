import Navbar from '../organisms/Navbar'
import GaleriaProyectos from '../organisms/GaleriaProyectos.jsx'
import Formulario from '../organisms/Formulario.jsx'
import Footer from '../organisms/Footer'
import perfil from '../../assets/profile/perfil.JPG'

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

                {/*Sección Experiencia laboral */}
                <section id="experiencia" className="experience-section">
                    <span className="section-label">MI TRAYECTORIA</span>

                    <h2>Experiencia laboral</h2>

                    <article className="experience-card">
                        <div className="experience-marker"></div>

                        <div className="experience-content">

                            <h3>Trainee Desarrolladora — OxigenCL (Abril 2024/Octubre 2024)</h3>

                            <ul>
                                <li>
                                    Apoyo en el mantenimiento y actualización de un sitio web.
                                </li>
                                <li>
                                    Realización de modificaciones menores utilizando PHP.
                                </li>
                                <li>
                                    Apoyo en la puesta en marcha y revisión de sitios web.
                                </li>
                                <li>
                                    Consulta y revisión de información en bases de datos MySQL.
                                </li>
                                <li>
                                    Experiencia práctica en desarrollo web y gestión de datos.
                                </li>
                            </ul>
                        </div>
                    </article>
                </section>

                {/*Sección Estudios */}
                <section id="estudios">
                    <h2>Estudios</h2>
                    <h3>Analista Programador — Duoc UC</h3>
                    <p>
                        Actualmente estoy cursando mi formación en programación y desarrollo
                        de software.
                    </p>
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