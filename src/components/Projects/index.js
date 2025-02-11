import './index.scss'
import { db } from '../../data/db'
import ProjectCollapse from './Project/ProjectCollapse'
import { useState } from 'react'
import ProjectDetail from './Project/ProjectDetail'

const Projects = () => {
  const [toggled, setToggled] = useState(true)

  return (
    <div className='container projects-page'>
      <h2>Projects</h2>
      <div className='toggle-container'>
        <p style={{color: toggled ? '#8c9a90' : '#566866', fontWeight: toggled ? 400 : 500}}>Collapse</p>
        <button 
          className={`toggle-btn ${toggled ? 'toggled' : ''}`}
          onClick={()=> setToggled(!toggled)}
        >
          <div className='thumb'></div>
        </button>
        <p style={{color: toggled ? '#566866' : '#8c9a90', fontWeight: toggled ? 500 : 400}}>Details</p>
      </div>
      <div className={toggled ? 'projects-list-detail' : 'projects-list-collapse'}>
        {db.map(project => (
          toggled ? (
            <ProjectDetail 
              key={project.id}
              project={project}
            />
          ) : (
            <ProjectCollapse 
              key={project.id}
              project={project}
            />
          )
        ))}
      </div>
      <div className='spacer'></div>
    </div>
  )
}

export default Projects