import React, { useRef } from 'react'
import logo from '../../assets/logo.png'
import { NavStyle } from './Nav.style'

type navProps = {
  onClick:any
  about:any
  products:any
  form:any
}

const Nav = (props: navProps) => {
  const { onClick, about, products, form } = props;

  return (
    <NavStyle >
    <div className="container">
        <img src={logo} alt="" />
            <div className="containermenor">
                 <button className='sobrenos' onClick={() => {onClick(about)}}> SOBRE NÓS</button>
                 <button className='produtos' onClick={() => {onClick(products)}}> PRODUTOS </button>
                 <button className='reserve'  onClick={() => {onClick(form)}}>RESERVE</button>
            </div>
    </div>

    </NavStyle>
  )
}

export default Nav;
