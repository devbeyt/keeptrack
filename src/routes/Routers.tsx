import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../home/HomePage'
import ProjectsPage from '../projects/ProjectsPage'

function Routers() {
  return (<Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/projects' element={<ProjectsPage/>}/>
  </Routes>
  )
}

export default Routers