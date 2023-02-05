import React, { useRef } from 'react'
import logo from '../../assets/logo.png'
import { NavStyle } from './Nav.style'

type navProps = {}

const Nav = (props: navProps) => {

  const sobrenos = useRef(null)
  const produtos = useRef(null)
  const reserve = useRef(null)

  const scroll = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop, behavior:'smooth'
    }
    )
  }

  return (
    <NavStyle >
    <div className="container">
        <img src={logo} alt="" />
            <div className="containermenor">
                 <button className='sobrenos' onClick={()=>scroll(sobrenos)}> SOBRE NÓS</button>
                 <button className='produtos' > PRODUTOS </button>
                 <button className='reserve'  >RESERVE</button>
            </div>
    </div>
    
    </NavStyle>
  )
}

export default Nav;