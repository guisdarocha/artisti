import { HeroStyle } from './HeroSection.style'
import bottle from '../../assets/hidromelsemfundo.png'


const HeroSection = () => {
  return (
    <HeroStyle className='container'>
      <img className='bottle' src={bottle} alt="garrafa de hidromel" />
    </ HeroStyle>
  )
}

export default HeroSection
