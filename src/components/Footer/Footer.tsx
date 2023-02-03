import React from 'react'
import { FooterStyle } from './Footer.style'
import barril from '../../assets/barrilvinho.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'


type footerProps = {}

const Footer = (props: footerProps) => {
  return (
<FooterStyle>   
    <div className="barril">
        <img src={barril} alt="" />
            <div className="texto">
                <h5>Junte-se a nós nas redes sociais</h5>
                <button>NOS SIGA</button>
            </div>
    </div>
    <footer>
        <div className="direitos">
            <p>© 2023 Artist. Todos os direitos reservados.</p>
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />            
        </div>
    </footer>
</FooterStyle>
  )
}

export default Footer