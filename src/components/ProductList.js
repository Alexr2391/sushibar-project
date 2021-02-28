import React from 'react'
import './css/ProductList.css'
import ProductCard from './ProductCard'


const ProductList =() => {

    return (
        <div className="product-list-container">
            <div className="product-list-wrapper">
                <h1>ΟΡΕΚΤΙΚΑ</h1>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                <h1>ΣΑΛΑΤΕΣ</h1>
            </div>

        </div>
    )
}

export default ProductList
