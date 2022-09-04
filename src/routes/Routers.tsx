import { Route, Routes } from 'react-router-dom'
import HomePage from '../home/HomePage'
import ProjectPage from '../projects/ProjectPage'
import ProjectsPage from '../projects/ProjectsPage'

function Routers() {
  return (<Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/projects' element={<ProjectsPage/>}/>
    <Route path='/projects/:id' element={<ProjectPage/>}/>
  </Routes>
  )
}

export default Routers