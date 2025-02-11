import './ProjectCollapse.scss'

export default function ProjectCollapse({project}){

  const {image, name, link} = project
  const imagePath = require(`../../../assets/images/${image}.png`);

  return (
    <div className="project-collapse">
      <div className='project'>
        <img src={imagePath} alt={name} />
      </div>
      <div className='hover-project'>
        <h3>{name}</h3>
        <a href={link} target='_blank' rel="noreferrer" >Visit Site</a>
      </div>
    </div>
  )
}