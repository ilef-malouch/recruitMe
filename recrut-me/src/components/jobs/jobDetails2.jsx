
import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Figure } from "react-bootstrap";
import { useParams } from "react-router";


const JobDetails2 = ({job}) => {
    // const [job, setJob] = useState('');
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
            cv: candidature.cv,
            email: candidature.email,
            phone: candidature.phone,
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

            })
    }

    const setCv = (event) => {
        console.log("cc");
        const token = localStorage.getItem("token");
        const fd = new FormData();
        const file = event.target.files[0];
        fd.append("file", file, file.name);
        console.log("phooto");
        axios
            .post("http://localhost:8000/recrutme/authclient/cv/" + token, fd)
            .then((result) => {
                setCandidature({ ...candidature, cv: result.data.cv })
                //   client.cv = result.data.cv;
            });
    };


    // useEffect(() => {
    //     axios.get(`http://localhost:8000/recrutme/jobs/${id}`)
    //         .then(response => {
    //             setJob(response.data);
    //             console.log("hey", job);
    //         }
    //         )
    //         .catch(err => console.log(err));
    //     // setTimeout(() => {

    //     //     const compagny = job.recruter.CompagnyName;
    //     // }, 1000);

    // }, []);
    return (
        <>
            <style type="text/css">
                {`
    .bg-custom   { 
      background-color: 
      #ad0e88 ; 
    } `}
            </style>
            <div className="container mb-3" >
                <div>
                    <div className="jobdetails">
                        <div className="card mt-4 mb-3">
                            <div className="card-body">
                                <h3 className="card-title" >{job.poste}</h3>
                                <Figure>
                                    <Figure.Image
                                        width={80}
                                        height={100}
                                        alt="logo"
                                        src={job.recruter.Image}
                                    />

                                    <Figure.Caption>
                                        {/* <h2>{job.recruter.CompagnyName} </h2> */}
                                    </Figure.Caption>
                                </Figure>
                                {/* <div className="card-subtitle text-muted mb-2" >
                                recruter
                            </div> */}
                                <br />
                                <Badge bg="info">{job.secteur}</Badge>      <span> </span>
                                <Badge bg="warning" text="dark">
                                    {job.typeContrat}
                                </Badge>
                                <div className="card-text mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat mollitia, blanditiis aperiam, eum optio suscipit exercitationem, a illum molestiae fuga iste quam quae quos et animi excepturi accusamus! Earum, laborum! </div>
                                <h4 className="card-title" style={{ fontSize: "1.5rem" }}>Desired Languages:</h4>
                                <div className="card-text mb-2"> {job.langue}</div>

                                <h4 className="card-title">Description</h4>
                                <div className="card-text mb-2">{job.description} </div>
                                <h4 className="card-title">Required Skills:</h4>
                                <div className="card-text mb-2"> {job.competences} </div>
                                <Button margin="1rem" variant="contained" color="primary" type="submit">
                                    Post
                                </Button>
                            </div>
                        </div>

                    </div>
                    <div className="postuler" >
                        <div className="card mb-3 mr-2">
                            <div className="card-body">
                                <h2 className="card-title">Intrested in this job?</h2>
                                <form onSubmit={submitHandler} method='POST'  >
                                    <div class="mb-3 ">
                                        <label for="mail" class="form-label">Your Email:</label>
                                        <input type="text" class="form-control" id="mail" aria-describedby="mail" onChange={e => setCandidature({ ...candidature, email: e.target.value })} value={candidature.mail} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="phone" class="form-label">Phone Number:</label>
                                        <input type="number" class="form-control" id="phone" onChange={e => setCandidature({ ...candidature, phone: e.target.value })} value={candidature.phone} />
                                    </div>
                                    <p>Your CV :</p>
                                    <form action="" method="post" enctype="multipart/form-data">
                                        <input
                                            type="file"
                                            name="cv"
                                            id="fileUploadField"
                                            onChange={(event) => setCv(event)}
                                        ></input>
                                    </form>
                                    <Button margin="1rem" variant="contained" color="primary" type="submit">
                                        Post
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobDetails2;