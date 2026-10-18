import LinkProyecto from '../atoms/LinkProyecto'

const projects = [
    {
        title: 'Proyecto web',
        description: 'Aplicación desarrollada como parte de mi formación.',
        github: 'https://github.com/ShiimiChan',
    },
    {
        title: 'Proyecto de programación',
        description: 'Otro proyecto que muestra mis conocimientos técnicos.',
        github: 'https://github.com/ShiimiChan',
    },
]

function GaleriaProyecto() {
    return (
        <div className="project-gallery">
            {projects.map((project) => (
                <article key={project.title} className="project-card">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <LinkProyecto href={project.github}>
                        Ver en GitHub
                    </LinkProyecto>
                </article>
            ))}
        </div>
    )
}

export default GaleriaProyecto