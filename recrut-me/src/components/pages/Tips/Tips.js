import React from 'react'
import "./tricks.css"
import TipsCategories from './TipsCategories'
import { Cv } from './Cv'
import { Interview } from './Interview'
import { Networking } from './Networking'


const Tips = () => {
  return (
      <div className="Tips">
         <section className="curveSection">
               <div className="listTitles">
               <h3 className="title-h3">How to get your dream Job ?</h3>
                    <img src={require('./images/idea.png')} style={{paddingLeft:"100px"}} />
                   
               </div>
               <h5 className="paragraph-h51">“In the middle of difficulty lies opportunity.”<br/><br/><p className="author">-Albert Einstein-</p></h5>
                
             
            <div className="curve"></div>
         </section>
         <br/><br/><br/><br/><br/><br/><br/>
          <TipsCategories />
          <div>
            <h1 className="h1-cards"><img src={require('./icons/etoiles.png')} style={{marginRight:"20px"}} />Simple But Effective Ways to Make Your CV Stand Out<img src={require('./icons/etoiles.png')} style={{marginLeft:"20px"}} /></h1>  
            <Cv />
          </div>
          <div>
            <h1 className="h1-cards"><img src={require('./icons/etoiles.png')} style={{marginRight:"20px"}} />The importance of networking for career development<img src={require('./icons/etoiles.png')} style={{marginLeft:"20px"}} /></h1>  
          <Interview />
          </div>
          <div>
            <h1 className="h1-cards"><img src={require('./icons/etoiles.png')} style={{marginRight:"20px"}} />Importance of improving your Network<img src={require('./icons/etoiles.png')} style={{marginLeft:"20px"}} /></h1>  
          <Networking />
          </div>
      </div>
    
  )
}

export default Tips