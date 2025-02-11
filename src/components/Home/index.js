import { Link } from 'react-router-dom'
import './index.scss'
import Leaves from './Leaves'

const Home = () => {
  return (
    <div className="container home-page">
      <Leaves />
      <div className="text-zone">
        <h1>Paulina Valero</h1>
        <h2>Web Developer | Front End Developer | Graphic Designer</h2>
        <p>
          Hi, I am a Frontend Developer, specialized in creating user-friendly, visually appealing websites that stay true to the original design vision. My background in graphic design enhances my ability to bridge the gap between aesthetics and functionality, ensuring seamless user experiences.
        </p> 
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  )
}

export default Home 