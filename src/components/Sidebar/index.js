import './index.scss'
import LogoPV from '../../assets/images/logo-pv.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faGear, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

const Sidebar = () => {
  const [isActive, setIsActive] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';

      sections.forEach( section => {
        const sectionTop = section.getBoundingClientRect().top;
            
        if (sectionTop <= window.innerHeight / 3) {
          currentSection = section.id;
        }
      });

      setIsActive(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='sidebar'>
      <a className='logo' href='#home'>
        <img src={LogoPV} alt='logo' />
      </a> 

      <nav>
        <a 
          href="#home"
          className={`${isActive === 'home' ? 'active' : ''}`}
          onClick={() => setIsActive('home')}
        >
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a 
          href="#about"
          className={`about-link ${isActive === 'about' ? 'active' : ''}`}
          onClick={() => setIsActive('about')}
        >
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a 
          href="#skills"
          className={`skills-link ${isActive === 'skills' ? 'active' : ''}`}
          onClick={() => setIsActive('skills')}
        >
          <FontAwesomeIcon icon={faGear} />
        </a>
        <a 
          href="#projects"
          className={`projects-link ${isActive === 'projects' ? 'active' : ''}`}
          onClick={() => setIsActive('projects')}
        >
          <FontAwesomeIcon icon={faBriefcase} />
        </a>
        <a 
          href="#contact"
          className={`contact-link ${isActive === 'contact' ? 'active' : ''}`}
          onClick={() => setIsActive('contact')}
        >
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