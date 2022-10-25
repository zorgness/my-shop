import React, {useState, useEffect} from 'react'
import Result from './Result'
import { fetchData } from '../Api/fetchData'

const Home = ({datas, setDatas}) => {

  const [categories, setCategories] = useState([])
  const [loadCategories, setLoadCategories] = useState(true)

  useEffect(() => {

    const getCategories = async () => {

      await fetchData('https://dummyjson.com/products/categories')
      .then(data => {
        setCategories(data)
        setLoadCategories(false)
        }
      )
    }

    if(loadCategories) {

      return(() => {



        getCategories()

      })

    }

  }, [loadCategories, categories])


  const handleClick =  async (category) => {



      await fetchData(`https://dummyjson.com/products/category/${category}`)
      .then(data => {
        setDatas(data.products)
      } )


  }

  return (
    <>


      <div className="cards img-slider__container-1 mt-5 ">

        {
          categories?.map((category, index) => {

              return (

                  <div key={index}

                    onClick={() => handleClick(category)}
                    className="card-category"
                    style={{backgroundImage: ` linear-gradient(rgb(0 0 0 / 30%),rgb(0 0 0 / 30%)), url(https://source.unsplash.com/random/?${category})`}}
                    >
                    <h3 className='text-white'>{category}</h3>
                  </div>
              )
          })
        }

      </div>


      <Result datas={datas} />

    </>

  )
}

export default Home
