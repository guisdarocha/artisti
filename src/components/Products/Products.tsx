import React from 'react'
import Product from '../product/Product'
import garrafa from '../../assets/vinho1.png'
import favo from '../../assets/favo.png'
import canela from '../../assets/canela_laranja.png'
import { ProductStyle } from './Products.style'
import chave from "../../assets/chave.png"

type Props = {
  products:any
}

const Products = ({products}: Props) => {
  function reserve(){
    window.scrollTo({top:2900, behavior:'smooth'})
   }

  return (
    <>
    <ProductStyle ref={products}>
        <div className='hidromel'>
          <div className='texto-hidromel' >
            <Product title={'Hidromel Tradicional'} text={'Elaborado com méis de diferentes floradas, leveduras selecionadas e maturação em ambiente controlado. Somente mel e água.'}  />
            <button className='reserve' onClick={reserve}>RESERVE AGORA</button>
          </div>
            <img src={garrafa} alt="" className='garrafa' />
            <img src={favo} alt="" className='favo' />
        </div>
        <div className='melomel'>
              <img src={garrafa} alt="" className='garrafa-mel'/>
              <img src={canela} alt="" className='canela'/>
            <div className="texto-mel">
              <Product title={'Melomel'} text={'Elaborado com mel de florada de laranjeira, leva adição de laranjas e casca de canela in natura.'}  />
              <button className='reserve' onClick={reserve}>RESERVE AGORA</button>
            </div>
        </div>
        <img src={chave} alt=""  className='chave'/>
    </ProductStyle>
    </>
  )
}

export default Products
