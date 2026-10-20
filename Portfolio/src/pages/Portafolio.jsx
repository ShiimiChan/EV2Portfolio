import PortfolioTemplate from '../components/layout/PortfolioTemplate'

// Define el componente funcional Portfolio.
// Su responsabilidad es mostrar la plantilla del portafolio.
function Portfolio() {

    // Renderiza el componente PortfolioTemplate.
    // De esta manera, reutiliza la estructura de la página
    // sin necesidad de repetir todo su contenido
    return <PortfolioTemplate />
}

export default Portfolio