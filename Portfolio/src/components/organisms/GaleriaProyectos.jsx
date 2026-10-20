import LinkProyecto from '../atoms/LinkProyecto'

import decohogarImg from '../../assets/projects/decohogar.png'
import identityImg from '../../assets/projects/IdentitySimulation.png'

// Define los datos de los proyectos.
//Cada objeto contiene título, descripción, imagen y la dirección del repositorio.
const projects = [
    {
        title: 'DecoHogar',
        description:
            'Proyecto web enfocado en la decoración del hogar, con una presentación visual de productos e ideas para espacios.',
        image: decohogarImg,
        github: 'https://github.com/ostavolari/Evaluacion_Parcial_1-CASO-5_TIENDA_DECOHOGAR.git',
    },
    {
        title: 'Identity Simulation',
        description:
            'Plataforma web orientada a artistas y escritores de rol que permite la creación, gestión y organización de contenido creativo, incluyendo personajes, historias (lore) y mundos ficticios.',
        image: identityImg,
        github: 'https://github.com/saracchiardi/Identity-Simulation.git',
    },
]

//Componente que muestra todos los proyectos
function GaleriaProyectos() {
    return (
        <div className="project-gallery">
            {/* Recorre el arreglo y crea una tarjeta por cada proyecto. */}
            {projects.map((project) => (

                // Representa un proyecto individual.
                // key ayuda a React a identificar cada elemento de la lista.
                <article key={project.title} className="project-card">
                    <img
                        src={project.image}
                        alt={`Captura del proyecto ${project.title}`}
                        className="project-image"
                    />

                    <div className="project-info">
                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <LinkProyecto href={project.github}>
                            Ver código en GitHub
                        </LinkProyecto>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default GaleriaProyectos
