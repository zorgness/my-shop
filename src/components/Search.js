import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FetchData } from '../Api/FetchData';

const Search = ({setDatas}) => {

  const [product, setProduct] = useState("");

  const handleChange = (e) => {
    setProduct(e.target.value)
  }

  const handleSubmit = (e) => {

    e.preventDefault()
    setDatas([])
    FetchData(`https://dummyjson.com/products/search?q=${product}`)
    .then(data => {
      setDatas(data.products)
    })
  }

  return (
    <>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
    </>
  )
}

export default Search
