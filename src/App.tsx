import './App.css'
import Header from './components/header/Header'
import Routers from './routes/Routers'

function App() {
  // return (<div className='container'>
  //   <ProjectsPage/>
  // </div>
  // )
 return(<div className='App'>
  <Header/>
  <Routers/>
 </div>
 )
}

export default App