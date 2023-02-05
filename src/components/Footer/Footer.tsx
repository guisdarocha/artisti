import React from 'react'
import { FooterStyle } from './Footer.style'
import barril from '../../assets/barrilvinho.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'


type footerProps = {

}

const Footer = (props: footerProps) => {

  return (
<FooterStyle>   
    <div className="barril">
        <img src={barril} alt="" />
            <div className="texto">
                <h5>Junte-se a nós nas redes sociais</h5>
                    <a href='https://www.instagram.com/bellalunahidromeis/' target="_blank" rel="noopener noreferrer">
                        <button>NOS SIGA</button>
                    </a>
            </div>
    </div>
    <footer>
        <div className="direitos">
            <p>© 2023 Artist. Todos os direitos reservados.</p>
            <div className="socialmedia">
                    <a href='https://www.instagram.com/bellalunahidromeis/' target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="" />
                    </a>
                    <a href='https://www.instagram.com/bellalunahidromeis/' target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="" />  
                    </a>
            </div>          
        </div>
    </footer>
</FooterStyle>
  )
}

export default Footer