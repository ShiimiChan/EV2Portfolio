function Footer() {

    // Obtiene automáticamente el año actual del sistema.
    // Así no es necesario actualizar el año manualmente.
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <p>Silvana Reyes Acchiardi</p>

            <div className="footer-links">

                {/* Enlace al perfil de GitHub.
                    target="_blank" abre una pestaña nueva.
                    rel protege frente a ciertos riesgos de la pestaña externa. */}
                <a
                    href="https://github.com/ShiimiChan"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

            </div>

            {/* Muestra el símbolo de copyright, el año y el nombre del sitio. */}
            <p>© {year} · Portafolio profesional</p>
        </footer>
    )
}

export default Footer
