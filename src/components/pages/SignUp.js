import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import history from "../../history";
import BaseUrl from "../../api/Url";
import "../pages/css/signup.css";

export default class SignUp extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    uniqueId: "",
    email: "",
    password: "",
    mobile: "",
    error: "",
    loading: false
  };

  onInputChange = async event => {
    await this.setState({ [event.target.name]: event.target.value });
  };

  checkValidation = async () => {
    // const hasNumber = /\d/;
    // const hasSymbol = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const isletters = /^[a-zA-Z]+$/;
    const isEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    // console.log("In validation");
    // console.log(this.state);

    if (!isletters.test(this.state.firstName)) {
      await this.setState({ error: "Enter valid First Name" });
      await this.setState({ firstName: "" });
      return false;
    } else if (!isletters.test(this.state.lastName)) {
      await this.setState({ error: "Enter valid Last Name" });
      await this.setState({ lastName: "" });
      return false;
    } else if (!isEmail.test(this.state.email)) {
      await this.setState({ error: "Not a valid Email" });
      await this.setState({ email: "" });
      return false;
    } else if (this.state.password.length < 5) {
      await this.setState({
        error: "Password too short must be greater than 5 characters"
      });
      await this.setState({ password: "" });
      return false;
    } else {
      return true;
    }
  };

  onFormSubmit = async event => {
    event.preventDefault();
    // console.log(event);
    if (this.checkValidation()) {
      // console.log("all good");
      const url = `${BaseUrl}/api/user/register`;
      // console.log(url);
      const res = await axios.post(url, {
        FirstName: this.state.firstName,
        LastName: this.state.lastName,
        PhoneNumber: this.state.mobile,
        Email: this.state.email,
        Password: this.state.password,
        SignupID: this.state.uniqueId,
        username: this.state.userName
      });
      // console.log(res);
      await this.setState({ loading: false });
      if (!res.data.success) {
        await this.setState({ error: res.data.message });
      } else {
        history.push("/rules");
      }
    } else console.log("Erroneous");
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="loader">
          {/* <img src="./pages/css/assets/loader_final.gif" alt="loader" /> */}
        </div>
      );
    } else {
      return (
        <div className="register">
          <h1>Register</h1>
          <form onSubmit={this.onFormSubmit}>
            <input
              className="firstName"
              name="firstName"
              value={this.state.firstName}
              placeholder="First Name"
              type="text"
              onChange={this.onInputChange}
              required
            />
            <input
              className="lastName"
              name="lastName"
              value={this.state.lastName}
              placeholder="Last Name"
              type="text"
              onChange={this.onInputChange}
              required
            />
            <br />
            <input
              className="userName"
              name="userName"
              value={this.state.userName}
              placeholder="User Name"
              type="text"
              onChange={this.onInputChange}
              required
            />
            <br />
            <input
              className="uniqueId"
              name="uniqueId"
              value={this.state.uniqueId}
              placeholder="Unique Id"
              type="text"
              onChange={this.onInputChange}
              required
            />
            <br />
            <input
              className="email"
              name="email"
              value={this.state.email}
              placeholder="Email ID"
              type="email"
              onChange={this.onInputChange}
              required
            />
            <br />
            <input
              className="password"
              name="password"
              value={this.state.password}
              placeholder="Password"
              type="password"
              onChange={this.onInputChange}
              required
            />
            <input
              className="mobile"
              name="mobile"
              value={this.state.mobile}
              placeholder="Mobile"
              type="numnber"
              onChange={this.onInputChange}
              required
            />
            <br />
            <button type="submit">Register</button>
            <p>{this.state.error}</p>
          </form>
          <div>
            <p>
              Already in Hunt? <Link to="/login">Log In</Link>
            </p>
          </div>
        </div>
      );
    }
  }
}
