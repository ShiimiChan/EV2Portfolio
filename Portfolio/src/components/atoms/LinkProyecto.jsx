//function LinkProyecto define un componente que recibe dos propiedades:
// href contiene la dirección del enlace.
// children contiene el contenido que se mostrará dentro del enlace.
function LinkProyecto({ href, children }) {
    return (

        // Crea un enlace HTML.
        // href define el destino.
        // target="_blank" abre el enlace en una pestaña nueva.
        // rel añade protección al navegar a sitios externos.
        <a href={href} target="_blank" rel="noopener noreferrer">

            {/* Muestra el contenido recibido como children. */}
            {children}
        </a>
    )
}

export default LinkProyecto