import React from 'react'
import logo from '../../assets/logo.png'
import { NavStyle } from './Nav.style'


type navProps = {}

const Nav = (props: navProps) => {
  return (
    <NavStyle >
    <div className="container">
        <img src={logo} alt="" />
            <div className="containermenor">
                 <button className='sobrenos'> SOBRE NÓS</button>
                 <button className='produtos'> PRODUTOS </button>
                 <button className='reserve'>RESERVE</button>
            </div>
    </div>
    
    </NavStyle>
  )
}

export default Nav;