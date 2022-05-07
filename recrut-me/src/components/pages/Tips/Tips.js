import React from 'react'
import "./tricks.css"
import TipsCategories from './TipsCategories'
import { Cv } from './Cv'
import { Interview } from './Interview'
import { Networking } from './Networking'


const Tips = () => {
  return (
      <div className="Tips">
         <section className="curveSection"></section>
          <TipsCategories />
          <hr style={{width:"100%",textAlign:"left",marginLeft:"0"}}/>
          <div>
            <h1 className="h1-cards">Simple But Effective Ways to Make Your CV Stand Out</h1>  
            <Cv />
            <hr style={{width:"100%",textAlign:"left",marginLeft:"0"}}/>
          </div>
          <div>
            <h1 className="h1-cards">The importance of networking for career development</h1>  
          <Interview />
          <hr style={{width:"100%",textAlign:"left",marginLeft:"0"}}/>
          </div>
          <div>
            <h1 className="h1-cards">Importance of improving your Network</h1>  
          <Networking />
          </div>
      </div>
    
  )
}

export default Tips