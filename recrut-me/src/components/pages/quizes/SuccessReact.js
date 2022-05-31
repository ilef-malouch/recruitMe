import React from 'react';
import Img from '../../../images/quiz/react.png';

const SuccessReact = () => {
    return (
        <div>
            <img
                    src={Img}
                    alt="logo"
                    width="120"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                    style={{marginLeft: "45%"}} />
                    <h2
                    className="font-weight-light"
                    style={{ color: "#1c8090", fontSize: "40px", paddingLeft: "40%", paddingButtom:100 }}
                    >
                        Congrats, Good job!
                    </h2>
        </div>
    );
};

export default SuccessReact;