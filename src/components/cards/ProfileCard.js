import React, { Component } from "react";

class ProfileCard extends Component {
  state = {
    name: "",
    job: "",
    submittedName: "",
    submittedStatus: "",
    formVisible: true,
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleStatusChange = (e) => {
    this.setState({ job: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, job } = this.state;
    this.setState({
      submittedName: name,
      submittedStatus: job,
      name: "",
      job: "",
      formVisible: false, 
    });
  };

  render() {
    const {
      name,
      job,
      submittedName,
      submittedStatus,
      formVisible,
    } = this.state;

    return (
      <div className=" ">
        {formVisible ? ( 
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                onChange={this.handleNameChange}
                value={name}
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="job">Job Role:</label>
              <input
                id="job"
                type="text"
                onChange={this.handleStatusChange}
                value={job}
                placeholder="Enter your Job Role"
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        ) : (
          <div className="submitted-info">
            <p>Name: {submittedName}</p>
            <p>Job Role: {submittedStatus}</p>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileCard;
