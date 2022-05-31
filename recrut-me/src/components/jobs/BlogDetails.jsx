import { useParams } from "react-router";
import JobDetails2 from "./jobDetails2";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: job, isPending, error } = useFetch('http://localhost:8000/recrutme/jobs/' + id);

    return (
        <div className="blog-details">
            {isPending && <h2>Loading..</h2>}
            {error && <h2>{"he"+error}</h2>}
            {job && ( 
            <JobDetails2 job={job}/>
                // setTimeout(()=>
                // <JobDetails2 job={job}/> ,1000)
            )}

        </div>
    );
}

export default BlogDetails;