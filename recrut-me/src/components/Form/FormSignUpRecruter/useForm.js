import { useState } from "react";
import axios from "axios";

const useForm = (callback) => {
  const [values, setValues] = useState({
    CompagnyName: "",
    IdCompagny: "",
    Domaine: "",
    FacebookLink:"",
    LinkedinLink:"",
    PhoneNumber:"",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Type: "Recruter",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    callback();
    axios
      .post("http://localhost:8000/recrutme/authrecruter/signup", values)
      .then((response) => {
        console.log(response);
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return { handleChange, handleSubmit, values };
};

export default useForm;
