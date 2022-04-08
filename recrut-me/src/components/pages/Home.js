import React from 'react'
import Categories from '../categories/Categories'
import Jobs from '../jobs/Jobs'
import Process from '../process/Process'
import Tips from '../tips/Tips'

const Home = () => {
  return (
      <div>
          <Categories />
          <Process />
          <Jobs />
          <Tips />
      </div>
    
  )
}

export default Home