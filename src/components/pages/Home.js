import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../../api/Url";
import Dashboard from "../Dashboard";
// import History from "../../history";
import "./css/Home.css";

export default class Home extends React.Component {
  state = {
    data: [],
    question: "",
    error: "",
    loading: false
  };

  componentDidMount = async () => {
    if (localStorage.getItem("token") != null) this.getQuestions();
    // else History.push("/login");
    // this.getdetails();
  };

  getQuestions = async () => {
    let id = this.props.location.pathname.substring(1);
    console.log(id);
    let res,
      Url,
      que = "";
    try {
      if (id === "home" || id == null || id === "") {
        // console.log("if");
        Url = `${BaseUrl}/api/question/current`;
        res = await axios.get(Url, {
          headers: {
            "x-auth": localStorage.getItem("token")
          }
        });
        // console.log(res.data.data.question.question);
        if (res.data.success) que = res.data.data.question.question;
        else que = "";
      } else if (id === "luck") {
        console.log("in home luck");
      } else {
        // console.log("else");
        Url = `${BaseUrl}/api/question/submit`;
        res = await axios.get(Url, {
          headers: {
            "x-auth": localStorage.getItem("token")
          },
          params: { answer: id }
        });
        que = res.data.data.question.question;
      }
      // console.log(res.data.success);
      if (!res.data.success) {
        // console.log("inside if");
        let error = res.data.message;
        await this.setState({ error: error });
      }
    } catch (error) {
      console.log(error.message);
    }

    // que = res.data.data.question.question;
    await this.setState({ question: que });
    // console.log(this.state.question);
    this.getdetails();
  };

  getdetails = async () => {
    // console.log("In getstates");
    try {
      let url = `${BaseUrl}/api/user/myProfile`;
      let res = await axios.get(url, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      });
      // console.log(res.data.data.user);
      const data = {
        username: res.data.data.user.username,
        level: res.data.data.user.level,
        top: 5 - res.data.data.user.top / 2,
        score: res.data.data.user.score
      };
      // this.props.getUser(data.username);
      await this.setState({ data: data });
      await this.setState({ loading: false });
      // const question = "this is a question";
      // await this.setState({ question: question });
    } catch (error) {
      console.log("1:", error);
    }
  };
  render() {
    // console.log("inhome");
    if (this.state.loading) {
      return (
        <div className="loader">
          {/* <img src="./pages/css/assets/loader_final.gif" alt="loader" /> */}
        </div>
      );
    } else {
      if (localStorage.getItem("token") == null) {
        return (
          <div className="homeBox">
            <Link to="/login">Login</Link>
            <Link to="/signup">Register</Link>
            <br />
            <Link className="leader-button" to="/leaderboard">
              Leaderboard
            </Link>
          </div>
        );
      } else {
        return (
          <Dashboard
            data={this.state.data}
            question={this.state.question}
            error={this.state.error}
          />
        );
      }
    }
  }
}
