import React from 'react'   
import Product from './components/Product.jsx'

export default function ProductList(props){
    console.log(props)
    return (
        props.productList.map((product, i) => {
            return <Product product={product} key={i}/>
        })
    )
}