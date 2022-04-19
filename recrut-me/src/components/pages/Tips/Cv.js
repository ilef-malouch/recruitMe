import React from 'react'
import "./tricks.css"

export const Cv = () => {
  return (
    <>
          <section className="tipsContainer">
          
          <div className="myCard">
              <div className="card-image cv-1"></div>
              <h2 className="card-h2">Start Strong</h2>
              <p className="card-paragraph">
              Start with a summary of your skills and key accomplishments to attract the recruiter and grap their attention .
              </p>
          </div>
          <div className="myCard">
              <div className="card-image cv-2"></div>
              <h2 className="card-h2">Customize for the job you want</h2>
              <p className="card-paragraph">Don't go overboard. If your resume looks like a mirrored response to the job posting, it's too obvious. You're trying to highlight your best qualifications. Too many matches and they'll think you're embellishing.</p>
          </div>
          <div className="myCard">
              <div className="card-image cv-3"></div>
              <h2 className="card-h2">Highlight changes and growth</h2>
              <p className="card-paragraph">You should focus on your personal development and that you are committed to learning and expanding your skill set</p>
          </div>
          <div className="myCard">
              <div className="card-image cv-4"></div>
              <h2 className="card-h2" >Highlight relevant skills and experiences</h2>
              <p className="card-paragraph">Job descriptions are essentially a wish list written by HR. Go through each and every line, looking for the key skills, duties or qualifications described. This will become a list of skills and experience you want your resume to highlight. </p>
          </div>
      </section>
    </>
  )
}
