import React, { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard'
import ProjectForm from './ProjectForm'

interface ProjectListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    const [projectBeingEdited, setProjectBeingEdited] = useState({});


    //    return <pre>{JSON.stringify(projects,null,'')}</pre>

    //  return (<ul className='row'>
    //       {
    //         projects.map(project=>(
    //             <li key={project.id}>{project.name}</li>
    //         ))
    //       }
    //  </ul>)

    const handleEdit = (project: Project) => {
        // console.log(project)
        setProjectBeingEdited(project);
    }

    const content = projects.map(project => {
        return <div key={project.id} className="cols-sm">
            {/* <ProjectCard project={project} onEdit={handleEdit}/>
            <ProjectForm /> */}
            {
                project === projectBeingEdited ? (
                    <ProjectForm />
                ) : (
                    <ProjectCard project={project} onEdit={handleEdit} />
                )
            }
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