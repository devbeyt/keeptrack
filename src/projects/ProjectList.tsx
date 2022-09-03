import { Project } from './Project';
import ProjectCard from './ProjectCard'
import ProjectForm from './ProjectForm'

interface ProjectListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    //    return <pre>{JSON.stringify(projects,null,'')}</pre>

    //  return (<ul className='row'>
    //       {
    //         projects.map(project=>(
    //             <li key={project.id}>{project.name}</li>
    //         ))
    //       }
    //  </ul>)

    const content = projects.map(project => {
        return <div key={project.id} className="cols-sm">
            <ProjectCard project={project}></ProjectCard>
            <ProjectForm />
        </div>
    })

    return (
        <div className="row">
            {
            content
                //  <div key={project.id} className="cols-sm">
                //    <div className="card">
                //      <img src={project.imageUrl} alt={project.name} />
                //      <section className="section dark">
                //        <h5 className="strong">
                //          <strong>{project.name}</strong>
                //        </h5>
                //        <p>{project.description}</p>
                //        <p>Budget : {project.budget.toLocaleString()}</p>
                //      </section>
                //    </div>
                //  </div>
            }
        </div>
    )


}

export default ProjectList