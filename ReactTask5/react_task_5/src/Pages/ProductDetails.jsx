import React, { useContext } from 'react'
import { productDataContext } from '../context/ProductContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { Product } = useContext(productDataContext)

    const { id } = useParams()
    console.log(id);

  let selecteddata = ''

   
  if(Product.length>0){
     selecteddata = Product.find((element) => element.id==id)
  }



    return (
      <div className='detail'>
          <div className='productdetail' >
            <img src={selecteddata.image} alt="" />
            <h3>{selecteddata.title}</h3>
            <h4>{selecteddata.category}</h4>
            <p>₹{selecteddata.price}</p>
        </div>
      </div>

    )
}

export default ProductDetails
