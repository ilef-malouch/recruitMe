
import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Figure } from "react-bootstrap";
import { useParams } from "react-router";


const JobDetails = () => {
    const [job, setJob] = useState('');
    const [recruter, setRecruter] = useState('');
    const [candidature, setCandidature] = useState('');
    const { id } = useParams();
    const defaultJob = {
        poste: job.poste,
        typeContrat: job.typeContrat,
        secteur: job.secteur,
        langue: job.langue,
        genre: job.genre,
        description: job.description,
        competences: job.competences,
        dateExpiration: job.dateExpiration,
        motsCles: job.motsCles,
        recruter
    }
    const submitHandler = (e) => {
        e.preventDefault();

        // const cryptedPassword= bcrypt.hash(details.password,10)
        const candidat = {
            
            email: candidature.email,
            phone: candidature.phone,
            offre:id,
            cv: candidature.cv,
        }
        const token = localStorage.getItem('token');

        axios.post('http://localhost:8000/recrutme/candidature/postuler', candidat, {
            headers: ({
                Authorization: 'Bearer ' + token
            })
        })
            .then(res => {
                console.log(candidat);
                window.location.assign('/jobs')
            })
            .catch(err => {
                console.log(err.response);
                window.location.assign('/jobs')

            })
    }

    const setCv = (event) => {
        console.log("first")
        const token = localStorage.getItem("token");
        const fd = new FormData();
        const file = event.target.files[0];
        fd.append("file", file, file.name);
       
        axios
            .post("http://localhost:8000/recrutme/candidature/upload/", fd)
            .then((result) => {
            
               setCandidature({ ...candidature, cv:result.data.originalname })
               // console.log("ggg",candidature.cv);
            
            });
    };


    useEffect(() => {
        axios.get(`http://localhost:8000/recrutme/jobs/${id}`)
            .then(response => {
                setJob(response.data);
                console.log("hey", job);
            }
            )
            .catch(err => console.log(err)); 

    },[] );
    return (
        <>
            <style type="text/css">
                {`
    .bg-custom   { 
      background-color: 
      #ad0e88 ; 
    } `}
            </style>
            {

            job  ?
            <div className="container mb-3" >
                <div>
                    <div className="jobdetails">
                        <div className="card mt-4 mb-3">
                            <div className="card-body"> 
                                {/* <h3 className="card-title" >{job.poste}</h3> */}
                                <Figure>
                                    <Figure.Image
                                        width={80}
                                        height={100}
                                        alt="logo"
                                        src="https://img.icons8.com/plasticine/100/undefined/new-job.png"
                                    />

                                    <Figure.Caption>
                                        {/* <h2>{job.recruter.CompagnyName} </h2> */}
                                    </Figure.Caption>
                                </Figure>
                                <strong style={{ color: "#000", fontSize: "40px", textTransform: "uppercase",fontFamily:"Tiro Gurmukhi" ,margin:"1rem" }}>{job.poste}</strong>
                                 
                                {/* <div className="card-subtitle text-muted mb-2" >
                                recruter
                            </div> */}
                                <br />
                                <Badge bg="info">{job.secteur}</Badge>      <span> </span>
                                <Badge bg="warning" text="dark">
                                    {job.typeContrat}
                                </Badge>
                                <div className="card-text mb-2"
                                style={{ fontSize: "1.5rem",color:"black",fontFamily:"serif",textTransform: "capitalize",letterSpacing:"0.5px" }}
                                >{job.recruter.CompagnyName}</div>
                                <h4 className="card-title" style={{ fontWeight:"bold" ,fontSize: "1.5rem" }}>Desired Languages:</h4>
                                <div className="card-text mb-2"
                                style={{ fontSize: "1.5rem",color:"black",fontFamily:"serif",textTransform: "capitalize",letterSpacing:"0.5px" }}
                                > {job.langue}</div>

                                <h4 className="card-title"style={{ fontWeight:"bold" ,fontSize: "1.5rem" }}>Description</h4>
                                <div className="card-text mb-2"
                                style={{ fontSize: "1.5rem",color:"black",fontFamily:"serif",textTransform: "capitalize",letterSpacing:"0.5px" }}
                                >{job.description} </div>
                                <h4 className="card-title"style={{ fontWeight:"bold" ,fontSize: "1.5rem" }}>Required Skills:</h4>
                                <div className="card-text mb-2"
                                style={{ fontSize: "1.5rem",color:"black",fontFamily:"serif",textTransform: "capitalize",letterSpacing:"0.5px" }}
                                > {job.competences} </div>
                                 
                            </div>
                        </div>

                    </div>
                    <div className="postuler" >
                        <div className="card mb-3 mr-2">
                            <div className="card-body">
                                <h2 className="card-title">Intrested in this job?</h2>
                                <form onSubmit={submitHandler} method='POST' enctype="multipart/form-data" >
                                    <div class="mb-3 ">
                                        <label for="mail" class="form-label">Your Email:</label>
                                        <input type="text" class="form-control" id="mail" aria-describedby="mail" onChange={e => setCandidature({ ...candidature, email: e.target.value })} value={candidature.mail} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="phone" class="form-label">Phone Number:</label>
                                        <input type="number" class="form-control" id="phone" onChange={e => setCandidature({ ...candidature, phone: e.target.value })} value={candidature.phone} />
                                    </div>
                                    <Button style={{color:"white" ,height:"45px" }} variant="contained" color="primary" type="submit">
                                        Post
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> :null
}
        </>
    );
}

export default JobDetails;