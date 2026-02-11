import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { getdata } from '../api/productapi'


export const productDataContext = createContext()

const ProductContext = (props) => {

    const [Product, setProduct] = useState([])

   const setdata= async()=>{
    setProduct(await getdata())
   }

    useEffect(() => {
        setdata()
    }, [])


    return (
        <div>
    <productDataContext.Provider value={{Product}}>
        {props.children}
    </productDataContext.Provider>
        </div>
    )
}

export default ProductContext
