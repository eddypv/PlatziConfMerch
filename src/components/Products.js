import React from 'react'
import Product from './Product'
import '../styles/components/Products.css'

const Products =  ({products}) => (
        <div className="Products">
            <div className="Products-items">
                {products.map((item) => <Product key={item.id} product={item} />)}
            </div>
        </div>
    )
export default Products