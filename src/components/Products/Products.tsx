import React from 'react'
import Product from '../product/Product'

type Props = {}

const Products = (props: Props) => {
  return (
    <>
        <div>
            <Product title={''} text={''}  />
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
            <Product title={''} text={''}  />
        </div>
    </>
  )
}

export default Products