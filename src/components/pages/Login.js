import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../../api/Url";
import history from "../../history";
import "./css/Login.css";

export default class Login extends React.Component {
  state = {
    userName: "",
    password: "",
    error: ""
  };

  onInputChange = async event => {
    await this.setState({ [event.target.name]: event.target.value });
  };

  onFormSubmit = async event => {
    event.preventDefault();
    // console.log(this.state);
    const url = `${BaseUrl}/api/user/login`;
    const res = await axios.post(url, {
      username: this.state.userName,
      Password: this.state.password
    });
    // console.log(res.data);
    if (!res.data.success) {
      await this.setState({ error: "INVALID CREDENTIALS" });
    } else {
      localStorage.setItem("token", res.data.data.token);
      history.push("/home");
    }
  };

  render() {
    return (
      <div className="register">
        <h1>Login</h1>
        <form className="form" onSubmit={this.onFormSubmit}>
          <input
            className="userName"
            name="userName"
            placeholder="User Name"
            type="text"
            onChange={this.onInputChange}
            required
          />
          <br />
          <input
            className="password"
            name="password"
            placeholder="Password"
            type="password"
            onChange={this.onInputChange}
            required
            style={{ width: "75%" }}
          />
          <br />
          <p style={{ color: "black" }}>{this.state.error}</p>
          <button type="submit">Login</button>
        </form>
        <div>
          <p>
            New in Hunt? <Link to="/signup">Register Here</Link>
          </p>
        </div>
      </div>
    );
  }
}
