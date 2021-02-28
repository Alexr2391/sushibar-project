import React from 'react'
import './css/ProductList.css'
import ProductCard from './ProductCard'


const ProductList =() => {

    return (
        <div className="product-list-container">
            <div className="product-list-wrapper">
                <h1>ΟΡΕΚΤΙΚΑ</h1>
                    <ProductCard />
                    <ProductCard 
                        title='Tuna Maki'
                        desc='8 pieces of delicius tuna rolls'
                        src='https://cabare.gr/wp-content/uploads/2018/07/maki-sushi.jpg'
                    />
                    <ProductCard 
                        title='Ebi Nigiri'
                        desc ='6 pieces of ebi sushi'
                        src='https://media-cdn.tripadvisor.com/media/photo-s/11/0e/1a/d3/ebi-nigiri.jpg' 
                    />

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
