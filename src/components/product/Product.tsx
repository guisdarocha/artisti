import React from 'react'
import { ProductStyle } from './Product.style'

type productProps = {
  title: string;
  text: string;
}

const Product = ({title, text}: productProps) => {
  return (
    <ProductStyle>
    <h2>{title}</h2>
    <p>{text}</p>
    </ProductStyle>
  )
}

export default Product