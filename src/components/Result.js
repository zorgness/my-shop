import React from 'react'
import CardItem from  './CardItem'

const Result = ({datas}) => {

  const displayCards = datas.map((data) => {
    return (

        <CardItem key={data.id}  data={data} />

    )
  });


  return (
    <div className='d-flex justify-content-around flex-wrap gap-5'>
      {
        displayCards
      }
    </div>
  )
}

export default Result
