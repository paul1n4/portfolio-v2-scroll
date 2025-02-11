import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoPV from '../../assets/images/logo-pv.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faGear, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link className='logo' to='/'>
        <img src={LogoPV} alt='logo' />
      </Link> 

      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
          <FontAwesomeIcon icon={faGear} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
          <FontAwesomeIcon icon={faBriefcase} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
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