import { HeroStyle } from './HeroSection.style'
import bottle from '../../assets/hidromelsemfundo.png'
import key from "../../assets/chave.png"


const HeroSection = () => {
  return (
    <HeroStyle className='bg'>
      <div className='main-text'>
        <img src={key} alt="imagem de chave" />
        <h1>O Hidromel Brasileiro</h1>
        <h2>Produzido com mel orgânico.</h2>
      </div>
      <div>
        <img className='bottle' src={bottle} alt="garrafa de hidromel" />
      </div>

      <div className='waves-container'>
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g className="parallax">
      <use href="#gentle-wave" x="48" y="0" fill="rgba(193,149,103,0.7" />
      {/* <use href="#gentle-wave" x="48" y="3" fill="rgba(193,149,103,0.5)" /> */}
      {/* <use href="#gentle-wave" x="40" y="5" fill="rgba(193,149,103,0.3)" /> */}
      <use href="#gentle-wave" x="48" y="7" fill="#C19567" />
      </g>
      </svg>
      </div>

    </ HeroStyle>
  )
}

export default HeroSection
