import React from 'react'

class FormSignup extends React.Component {

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.value);
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 

  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.handleSubmit}>
          <h3>Create Account</h3>
          <label>
            FamilyName:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            FirstName:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Date Of Birth:
            <input type="date"/>
          </label>
          <label>
            Domaine :
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
      
    );
  }
}

export default FormSignup