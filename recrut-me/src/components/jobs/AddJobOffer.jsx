import axios from 'axios';
import Button from "@material-ui/core/Button";
import React, { useState } from 'react';
import './job.css';

export default function AddJobOffer() {
    const [details, setDetails] = useState({ poste: "", typeContrat: "", secteur: "", langue: "", genre: "", description: "", competences: "", dateExpiration: "" })
    const [error, setError] = useState([]);
    const [show, setShow] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();

        // const cryptedPassword= bcrypt.hash(details.password,10)
        const registred = {
            poste: details.poste,
            typeContrat: details.typeContrat,
            secteur: details.secteur,
            langue: details.langue,
            genre: details.genre,
            competences: details.competences,
            description: details.description
        }
        const token = localStorage.getItem('token');
       
        axios.post('http://localhost:8000/recrutme/jobs/add-job', registred,{
            headers: ({
                Authorization: 'Bearer ' + token
            })
        })
            .then(res => {
                console.log(registred);
                window.location.assign('/jobs')
            })
            .catch(err => {
                console.log(err.response);
                setShow(true);
                setError(err.response.data.message);

            })
    }


    return (
        <div>
          {/* <section className="curvejobSection"></section>  */}
                <h1 className='title'>POST A NEW OFFER</h1>
            <form onSubmit={submitHandler} method='POST' style={{ padding :'3rem 10rem' }}>
                <div class="mb-3">
                    <label for="poste" class="form-label">Job Title</label>
                    <input type="text" class="form-control" id="poste" aria-describedby="poste" onChange={e => setDetails({ ...details, poste: e.target.value })} value={details.poste} />
                </div>
                <div class="mb-3">
                    <label for="secteur" class="form-label">Field</label>
                    <input type="text" class="form-control" id="secteur" onChange={e => setDetails({ ...details, secteur: e.target.value })} value={details.secteur} />
                </div>
                <div class="row  ">
                    <div class="col mb-3">
                        <label for="language" class="form-label">Language</label>
                        <input class="form-control" list="languageOptions" id="language" placeholder="Type preferred language.." onChange={e => setDetails({ ...details, langue: e.target.value })} value={details.langue} />
                        <datalist id="languageOptions">
                            <option value="French" />
                            <option value="English" />
                            <option value="German" />
                        </datalist>
                    </div>
                    <div class="col mb-3 ">
                        <label for="dateExpiration" class="form-label">Date of Offer Expiration</label>
                        <input type="date" class="form-control" id="dateExpiration" onChange={e => setDetails({ ...details, dateExpiration: e.target.value })} value={details.dateExpiration} />
                    </div>

                </div>
                <div class="col  mb-3">
                    <select class="form-select" id="floatingSelectGrid" aria-label="Type of " onChange={e => setDetails({ ...details, typeContrat: e.target.value })} value={details.typeContrat}>
                        <option selected>select the type of contract</option>
                        <option value="1">Full Time contract</option>
                        <option value="2">Part time contract</option>
                        <option value="3">Fixed term contract</option>
                        <option value="4">Temporary contract</option>
                        <option value="5">Agency contract</option>
                    </select>
                </div>
                <div>
                    <label for="competences" class="form-label">Skills</label>
                    <input class="form-control" list="datalistOptions" id="competences" placeholder="Type a needed skill.." onChange={e => setDetails({ ...details, competences: e.target.value })} value={details.competences} />
                    <datalist id="datalistOptions">
                        <option value="Creative" />
                        <option value="Hard working" />
                        <option value="Team Belonging" />
                        <option value="Developper" />
                    </datalist>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" rows="3" onChange={e => setDetails({ ...details, description: e.target.value })} value={details.description}></textarea>
                </div>
                {/* <button type="submit" class="btn btn-primary">Submit Offer </button> */}
                <div style={{alignItems:true}} container alignItems="center" justify="center" direction="column">

                <Button variant="contained" color="primary" type="submit">
                    Submit  
                </Button>
                </div>
            </form>
        </div>
    );
}