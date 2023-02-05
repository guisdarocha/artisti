import React from 'react'
import { AboutStyle } from "./About.style"
import chave from "../../assets/chave.png"
import quemsomos from "../../assets/abelhafofa.png"

type AboutProps = {
  about:any
}

const About = ({about}: AboutProps) => {
  return (
    <AboutStyle ref={about}>
     <div className="container quemsomos" >
      <img src={quemsomos} className=''/>
        <div className="sobrenos">
          <img src={chave} alt="" className='chave' />
          <h3>Sobre nós</h3>
          <p>A Artisti é uma iniciativa de dois jovens estudantes de enologia da Serra Gaúcha.</p>
          <p>Nosso objetivo e prioridade é a qualidade e expressão artística de nossos produtos. Preferimos não
            divulgar safras, passagem por madeira ou formas específicas de elaboração dos nossos fermentados,
            pois queremos que o consumidor nos escolha pela qualidade e confiança na marca e não no marketing
            tradicional atrelado aos estigmas do vinho. Somos iconoclastas da sofisticação enológica.
          </p>
        </div>
      </div>
    </AboutStyle>
  )
}

export default About
