import React, { Fragment, useState, useEffect } from "react";
// import { MOCK_PROJECTS } from "./MockProjects"
import { projectAPI } from './projectAPI';
import ProjectList from "./ProjectList"
import { Project } from './Project';

function ProjectsPage() {
  // const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  const handleMoreClick = () => {
        setCurrentPage((currentPage) => currentPage + 1);
      };

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        // const data = await projectAPI.get(1);
        const data = await projectAPI.get(currentPage);
        setError('');
        // setProjects(data);
        if (currentPage === 1) {
                   setProjects(data);
                 } else {
                   setProjects((projects) => [...projects, ...data]);
                 }
      }
      catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  // }, []);
}, [currentPage]);




  const saveProject = (project: Project) => {
    // let updatedProjects = projects.map((p: Project) => {
    //   return p.id === project.id ? project : p;
    // });
    // setProjects(updatedProjects);

    projectAPI
      .put(project)
      .then((updatedProject) => {
        let updatedProjects = projects.map((p: Project) => {
          return p.id === project.id ? new Project(updatedProject) : p;
        });
        setProjects(updatedProjects);
      })
      .catch((e) => {
         if (e instanceof Error) {
          setError(e.message);
         }
      });
  }
  return (
    <Fragment>
      <h1>Projects</h1>
      {error && (
      <div className="row">
        <div className="card large error">
          <section>
            <p>
              <span className="icon-alert inverse "></span>
              {error}
            </p>
          </section>
        </div>
      </div>
    )}
      {/* <pre>{JSON.stringify(MOCK_PROJECTS,null,'')}</pre> */}
      {/* <ProjectList onSave={saveProject} projects={MOCK_PROJECTS}/> */}
      <ProjectList onSave={saveProject} projects={projects} />

      {!loading && !error && (
       <div className="row">
         <div className="col-sm-12">
           <div className="button-group fluid">
             <button className="button default more-btn" onClick={handleMoreClick}>
               More...
             </button>
           </div>
         </div>
       </div>
     )}

      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}
    </Fragment>
  )
}

export default ProjectsPage