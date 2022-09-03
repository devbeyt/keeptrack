import { MOCK_PROJECTS } from "./MockProjects"
import ProjectList from "./ProjectList"
import { Project } from './Project';

function ProjectsPage() {

  const saveProject = (project: Project) => {
    console.log('Saving project: ', project);
  }
  return (
    <div>
        <h1>Projects</h1>
        {/* <pre>{JSON.stringify(MOCK_PROJECTS,null,'')}</pre> */}
        <ProjectList onSave={saveProject} projects={MOCK_PROJECTS}/>
    </div>
  )
}

export default ProjectsPage