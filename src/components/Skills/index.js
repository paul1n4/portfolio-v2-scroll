import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faBootstrap, faCss3, faHtml5, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
  return (
    <div className='container skills-page'>
      <h2>Skills</h2>
      <div className='skills-list'>
        <div className='skill'>
          <div className='skill-svg'>
            <FontAwesomeIcon icon={faHtml5} color='#E44D26'/>
          </div>
          <p>HTML</p>
        </div>
        <div className='skill'>
          <div className='skill-svg'>
            <FontAwesomeIcon icon={faCss3} color='#1572B6'/>
          </div>
          <p>CSS</p>
        </div>
        <div className='skill'>
          <div className='skill-svg'>
            <FontAwesomeIcon icon={faJs}color='#F7DF1E'/>
          </div>
          <p>JavaScript</p>
        </div>
        <div className='skill'>
          <div className='skill-svg'>
            <FontAwesomeIcon icon={faReact} color='#61DAFB'/>
          </div>
          <p>React</p>
        </div>
        <div className='skill' >
          <div className='skill-svg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 32 32" ><title>file_type_typescript</title>
              <path d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z" fill='#007acc' />
            </svg>
          </div>
          <p>TypeScript</p>
        </div>
        <div className='skill'>
          <div className='skill-svg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 -26 256 256" version="1.1" preserveAspectRatio="xMidYMid">
              <g>
                <polygon fill="#00B0FF" points="0 110.848 0 0 96 55.424 96 92.3733333 32 55.424 32 129.322667"></polygon>
                <polygon fill="#0081CB" points="96 55.424 192 0 192 110.848 128 147.797333 96 129.322667 160 92.3733333 160 55.424 96 92.3733333"></polygon>
                <polygon fill="#00B0FF" points="96 129.322667 96 166.272 160 203.221333 160 166.272"></polygon>
                <path d="M160,203.221333 L256,147.797333 L256,73.8986667 L224,92.3733333 L224,129.322667 L160,166.272 L160,203.221333 Z M224,55.424 L224,18.4746667 L256,5.68434189e-14 L256,36.9493333 L224,55.424 Z" fill="#0081CB"></path>
              </g>
            </svg>          
          </div>
          <p>Material UI</p>
        </div>
        <div className='skill'>
          <div className='skill-svg'>
            <FontAwesomeIcon icon={faBootstrap} color='#7711F7' />
          </div>
          <p>Bootstrap</p>
        </div>
        <div className='skill'>
          <div className='skill-svg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 32 32" fill="none"><title>file_type_vite</title>
              <path d="M29.8836 6.146L16.7418 29.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956 6.1482c-.3-.5262.1498-1.1635.746-1.057l13.156 2.3516a.7144.7144 0 00.2537-.0004l12.8808-2.3478c.5942-.1083 1.0463.5241.7515 1.0513z" fill="url(#paint0_linear)"/>
              <path d="M22.2644 2.0069l-9.7253 1.9056a.3571.3571 0 00-.2879.3294l-.5982 10.1038c-.014.238.2045.4227.4367.3691l2.7077-.6248c.2534-.0585.4823.1647.4302.4194l-.8044 3.9393c-.0542.265.1947.4918.4536.4132l1.6724-.5082c.2593-.0787.5084.1487.4536.414l-1.2784 6.1877c-.08.387.4348.598.6495.2662L16.5173 25 24.442 9.1848c.1327-.2648-.096-.5667-.387-.5106l-2.787.5379c-.262.0505-.4848-.1934-.4109-.4497l1.8191-6.306c.074-.2568-.1496-.5009-.4118-.4495z" fill="url(#paint1_linear)"/><defs id="defs50"><linearGradient id="paint0_linear" x1="6.0002" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"><stop stop-color="#41D1FF" id="stop38"/><stop offset="1" stop-color="#BD34FE" id="stop40"/></linearGradient><linearGradient id="paint1_linear" x1="194.651" y1="8.8182" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"><stop stop-color="#FFEA83" id="stop43"/><stop offset=".0833" stop-color="#FFDD35" id="stop45"/><stop offset="1" stop-color="#FFA800" id="stop47"/></linearGradient></defs>
            </svg>
          </div>
          <p>Vite</p>
        </div>
        <div className='skill'>
          <div className='skill-svg'>  
            <svg xmlns="http://www.w3.org/2000/svg" fill="#38bdf8" width="80px" height="80px" viewBox="0 0 24 24" >
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/>
            </svg>
          </div>
          <p>Tailwind Css</p>
        </div>
        <div className='skill'>
          <div className='skill-svg'>
            <FontAwesomeIcon icon={faSass} color='#CC6699'/>
          </div>
          <p>Sass</p>
        </div>

      </div>
    </div>
  )
}

export default Skills