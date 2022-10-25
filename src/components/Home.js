import React, {useState, useEffect} from 'react'
import Result from './Result'
import Discount from './Discount';
import { FetchData } from '../Api/fetchData'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Home = ({datas, setDatas}) => {

  const [categories, setCategories] = useState([])
  const [loadCategories, setLoadCategories] = useState(true)
  const [scroll, setScroll] = useState(0)

  useEffect(() => {

    const getCategories = async () => {

      await FetchData('https://dummyjson.com/products/categories')
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


  const handleScroll = (e) => {

     const main = e.target.scrollWidth
     let left = e.target.scrollLeft

     let level = (left /main) * 100

     setScroll(level)

  }



  const handleClick =  async (category) => {

      await FetchData(`https://dummyjson.com/products/category/${category}`)
      .then(data => {
        setDatas(data.products)
      } )
  }


  return (
    <>


      <div className="cards img-slider__container-1 mt-5 mx-3" onScroll={handleScroll}>

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



      <ProgressBar animated now={scroll} />

      {
        datas.length > 0 ? <Result datas={datas} />  :<Discount />
      }


    </>

  )
}

export default Home
