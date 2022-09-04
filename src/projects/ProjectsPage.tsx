import React,{useState} from "react";
import { MOCK_PROJECTS } from "./MockProjects"
import ProjectList from "./ProjectList"
import { Project } from './Project';

function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const saveProject = (project: Project) => {
    let updatedProjects = projects.map((p: Project) => {
          return p.id === project.id ? project : p;
        });
        setProjects(updatedProjects);
  }
  return (
    <div>
        <h1>Projects</h1>
        {/* <pre>{JSON.stringify(MOCK_PROJECTS,null,'')}</pre> */}
        {/* <ProjectList onSave={saveProject} projects={MOCK_PROJECTS}/> */}
        <ProjectList onSave={saveProject} projects={projects} />
    </div>
  )
}

export default ProjectsPage