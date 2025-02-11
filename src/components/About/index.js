import './index.scss'
import Programmer from '../../assets/images/programmer.png'
import DesignIllustration from '../../assets/images/design_illustration.png'

const About = () => {
  return (
    <div className='container about-page'>
      <h2>About Me</h2>
      <div className='about-content'>
        <div className='about-text'>
          <h3>Front End Developer</h3>
          <p>I am a Frontend Developer proficient in HTML, CSS, JavaScript, and React. I am passionate about creating and developing websites ensuring clean, modular, and scalable designs. Frontend development allows me to blend my technical skills with creativity, giving me the opportunity to write code while shaping the visual and interactive aspects of a website.</p>
        </div>
        <div className='image'>
          <img src={Programmer} alt='Programmer'/>
        </div>
      </div>

      <div className='about-content'>
        <div className='image'>
          <img src={DesignIllustration} alt='Design Illustration'/>
        </div>
        <div className='about-text graphic-designer'>
          <h3>Graphic Designer</h3>
          <p>I have 3 years of experience in Graphic Design, including working at a digital marketing agency. I am proficient in Photoshop and Illustrator, with additional experience in Figma and After Effects. My background has equipped me with a strong eye for detail and creativity.</p>
        </div>
      </div>

      <div className='spacer'></div>
    </div>
  )
}

export default About