import { Link } from 'react-router-dom'
import './index.scss'
import LogoPV from '../../assets/images/logo-pv.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faGear, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <a className='logo' href='#home'>
        <img src={LogoPV} alt='logo' />
      </a> 

      <nav>
        <a href="#home">
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a 
          className="about-link" 
          href="#about"
        >
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a className="skills-link" href="#skills">
          <FontAwesomeIcon icon={faGear} />
        </a>
        <a className="projects-link" href="#projects">
          <FontAwesomeIcon icon={faBriefcase} />
        </a>
        <a className="contact-link" href="#contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </nav>   

      <ul>
        {/* <li>
          <a rel='noreferrer' href='/'>EN</a>
        </li>
        <li>
          <a rel='noreferrer' href='/'>FR</a>
        </li>
        <li>
          <a rel='noreferrer' href='/'>ES</a>
        </li> */}
      </ul>

    </div>
  )
}

export default Sidebar