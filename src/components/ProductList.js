import React from 'react'
import './css/ProductList.css'
import ProductCard from './ProductCard'


const ProductList =() => {

    return (
        <div className="product-list-container">
            <div className="product-list-wrapper">
                <h1 className="menu-title">ΟΡΕΚΤΙΚΑ</h1>
                    <ProductCard 
                        title='Edamame beans'
                        desc='Traditional edamame'
                        src="https://cdn3.volusion.com/kceqm.mleru/v/vspfiles/photos/351-3.jpg?v-cache=1597056844"
                        price='4.50€'
                    />
                <h1 className="menu-title">MAKI SUSHI</h1>
                    <ProductCard 
                        title='Salmon Maki'
                        desc='8 pieces of delicius salmon rolls'
                        src='https://cabare.gr/wp-content/uploads/2018/07/maki-sushi.jpg'
                        price='6.50€'
                    />
                    <ProductCard 
                        title='California tuna rolls'
                        desc='8 pieces of spicy California tuna rolls'
                        src='https://flockler.com/thumbs/sites/192/sushi_at_home_3_62_img_s600x600_c2220x1297_l100x409.jpg'
                        price='7.00€'
                    />
                <h1 className="menu-title">NIGIRI SUSHI</h1>
                    <ProductCard 
                        title='Ebi Nigiri'
                        desc ='6 pieces of ebi sushi'
                        src='https://media-cdn.tripadvisor.com/media/photo-s/11/0e/1a/d3/ebi-nigiri.jpg' 
                        price='8.00€'
                    />
                    <ProductCard 
                        title='Tuna Nigiri'
                        desc ='6 pieces of red Tuna sushi'
                        src='https://www.chinacafebelton.com/mt-content/uploads/2019/09/r18-tuna-nigiri-a.jpg' 
                        price='10.00€'
                    />
                    <ProductCard 
                    />
            </div>

        </div>
    )
}

export default ProductList
