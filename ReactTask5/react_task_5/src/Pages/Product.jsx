import React, { useContext } from 'react'
import { productDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Product = () => {
    const { Product } = useContext(productDataContext)

    let renderdata = "loading"

    if (Product.length > 0) {
        renderdata = Product.map((elem, id) => {
            return <Link key={id} to={`/product/${elem.id}`}>
                <div className='product' >
                    <img src={elem.image} alt="" />
                    <h3>{elem.title}</h3>
                    <p>₹{elem.price}</p>
                </div>
            </Link>
        })
    }


    return (
        <div className='allproduct'>

            {renderdata}

        </div>
    )
}

export default Product
