import React from 'react'
import Find  from '../find/Find'
import Categories from '../categories/Categories'
import Jobs from '../jobs/Jobs'
import Process from '../process/Process'
import TipsCategories from '../pages/Tips/TipsCategories'

const Home = () => {
  return (
      <div>
          <Find />
          <Categories />
          <Process />
          <Jobs />
          <TipsCategories classeName="homeTips" />
      </div>
    
  )
}

export default Home