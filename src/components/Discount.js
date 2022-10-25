import React, { useState, useEffect} from 'react'
import { FetchData } from '../Api/fetchData';
import DisountCard from './DisountCard';

const Discount = () => {

  const [products, setProduct] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(() => {

    if(load) {

      return(() => {
        getProduct()
        setLoad(false)
      })
    }

  }, [load])

  const getProduct = async () => {
    await FetchData('https://dummyjson.com/products')
    .then(data => {
      setProduct(data.products.filter(product => product.discountPercentage > 16))
    })
  }


  return (
    <div className='bg-dark p-3'>
      <h3 className='text-center text-white text-decoration-underline m-5'>Promotion</h3>
        <div className='d-flex justify-content-around flex-wrap gap-5 m-3 '>
        {
          products.map(product => {
            return (

              <DisountCard key={product.id} product={product} />
            )
          })
        }
        </div>
    </div>
  )
}

export default Discount
