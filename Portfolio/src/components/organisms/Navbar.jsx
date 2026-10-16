import { Layout, Menu } from 'antd'

function Navbar() {
    const items = [
        { key: 'sobre-mi', label: 'Sobre mí' },
        { key: 'experiencia', label: 'Experiencia' },
        { key: 'estudios', label: 'Estudios' },
        { key: 'proyectos', label: 'Proyectos' },
        { key: 'contacto', label: 'Contacto' },
    ]

    function handleClick(info) {
        const section = document.getElementById(info.key)

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <Layout.Header className="navbar">
            <div className="navbar-logo">Mi Portfolio</div>

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
