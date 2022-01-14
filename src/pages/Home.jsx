import React from 'react'
import NavbarAlt from '../components/NavbarAlt'
import Products from '../components/Products'
import Orders from '../components/Orders'
import PaginationLayout from "../components/Pagination"


const Home = () => {
    return (
        <div>
          <NavbarAlt/>
          <Products/>
          <PaginationLayout/>

        </div>
    )
}

export default Home
