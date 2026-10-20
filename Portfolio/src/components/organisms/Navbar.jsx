
import { Layout, Menu } from 'antd'

// Define las opciones que aparecerán en el menú.
function Navbar() {
    const items = [
        { key: 'sobre-mi', label: 'Sobre mí' },
        { key: 'experiencia', label: 'Experiencia' },
        { key: 'estudios', label: 'Estudios' },
        { key: 'proyectos', label: 'Proyectos' },
        { key: 'contacto', label: 'Contacto' },
    ]

    // Busca la sección seleccionada y se desplaza hasta ella.
    function handleClick(info) {
        const section = document.getElementById(info.key)

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <Layout.Header className="navbar">
            <a href="#sobre-mi" className="navbar-logo">
                Silvana Reyes
            </a>

            <Menu
                mode="horizontal"
                theme="dark"
                items={items}
                onClick={handleClick}
                className="navbar-menu"
            />
        </Layout.Header>
    )
}

export default Navbar
