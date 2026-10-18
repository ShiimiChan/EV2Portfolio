
function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <p>Silvana Reyes Acchiardi</p>

            <div className="footer-links">
                <a
                    href="https://github.com/ShiimiChan"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

                {/* Agregaremos LinkedIn cuando tengamos tu enlace */}
            </div>

            <p>© {year} · Portafolio profesional</p>
        </footer>
    )
}

export default Footer
