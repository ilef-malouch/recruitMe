import React from "react";
import Quiz from "../../quiz/Quiz";
import Img1 from '../../../images/quiz/react.png';
import Img2 from '../../../images/quiz/angular.png';
import Img3 from '../../../images/quiz/springboot.png';
import Img4 from '../../../images/quiz/python.png';

const Quizes = () =>  {
    return (
      <div className="container py-5">
          <div className="row mb-4">
            <div className="">
                <h2
                    className="font-weight-light"
                    style={{ color: "#1c8090", fontSize: "40px", paddingLeft: "35%" }}
                    >
                    Test your knowledge:
                </h2>
            </div>
        </div>

        <div className="row text-center">
            <Quiz name="React" details=" 5 questions" img={Img1}   /> 
            <Quiz name="Angular" details=" 5 questions" img={Img2}  />
            <Quiz name="SpringBoot" details=" 5 questions" img={Img3}  />
            <Quiz name="Python" details=" 5 questions" img={Img4} />
        </div>    
      </div>
    );
  };
  
  export default Quizes;