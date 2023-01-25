import { HeroStyle } from './HeroSection.style'
import bottle from '../../assets/hidromelsemfundo.png'
import key from "../../assets/chave.png"


const HeroSection = () => {
  return (
    <HeroStyle>
      <div className='main-text'>
        <img src={key} alt="imagem de chave" />
        <h1>O Hidromel Brasileiro</h1>
        <h2>Produzido com mel orgânico.</h2>
      </div>
      <div>
        <img className='bottle' src={bottle} alt="garrafa de hidromel" />
      </div>
    </ HeroStyle>
  )
}

export default HeroSection
