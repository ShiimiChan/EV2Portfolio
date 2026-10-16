import Navbar from '../organisms/Navbar'

function PortfolioTemplate() {
    return (
        <>
            <Navbar />

            <main>
                <section id="sobre-mi">
                    <h1>Sobre mí</h1>
                    <p>Esta será mi presentación profesional.</p>
                </section>

                <section id="experiencia">
                    <h2>Experiencia</h2>
                    <p>Aquí mostraremos mi experiencia laboral.</p>
                </section>

                <section id="estudios">
                    <h2>Estudios</h2>
                    <p>Aquí mostraremos mi formación académica.</p>
                </section>

                <section id="proyectos">
                    <h2>Proyectos</h2>
                    <p>Aquí mostraremos mis desarrollos.</p>
                </section>

                <section id="contacto">
                    <h2>Contacto</h2>
                    <p>Aquí estarán mis medios de contacto.</p>
                </section>
            </main>
        </>
    )
}

export default PortfolioTemplate
