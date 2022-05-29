import { useState } from "react";
import axios from "axios";

const useForm = (callback) => {
  const [values, setValues] = useState({
    FamilyName: "",
    FirstName: "",
    Birthday: "",
    Domaine: "",
    GithubLink: "",
    LinkedinLink: "",
    PhoneNumber: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Type: "Client",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    fetch("http://localhost:8000/recrutme/authclient/signup", values).then((result) => {
      console.log(result);
      localStorage.setItem("token", result.token);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    callback();
    axios
      .post("http://localhost:8000/recrutme/authclient/signup", values)
      .then((response) => {
        console.log(response);
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
