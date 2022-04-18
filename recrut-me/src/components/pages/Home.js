import React from 'react'
import Find  from '../find/Find'
import Categories from '../categories/Categories'
import Jobs from '../jobs/Jobs'
import Process from '../process/Process'
import Tips from '../tips/Tips'

const Home = () => {
  return (
      <div>
          <Find />
          <Categories />
          <Process />
          <Jobs />
          <Tips />
      </div>
    
  )
}

export default Home