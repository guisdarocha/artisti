import React from 'react'
import logo from '../../assets/logo.png'

type navProps = {}

const Nav = (props: navProps) => {
  return (
    <>
    <img src={logo} alt="" />
    <div className="container">
        <li> SOBRE NÓS</li>
        <li> PRODUTOS </li>
        <button className='reserve'>RESERVE</button>
    </div>
    </>
  )
}

export default Nav;