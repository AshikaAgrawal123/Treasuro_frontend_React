import React from "react";
import axios from "axios";
import BaseUrl from "../api/Url";
import Dashboard from "./Dashboard";
import "./pages/css/Home.css";
import History from "../history";

export default class Home extends React.Component {
  state = {
    data: [],
    question: "",
    error: "",
    loading: false
  };

  componentDidMount = async () => {
    if (localStorage.getItem("token") != null) this.displayBonus();
    else History.push("/login");
    // this.getdetails();
  };

  displayBonus = async () => {
    let res,
      Url,
      que = "";
    try {
      Url = `${BaseUrl}/api/bonus`;
      res = await axios.get(Url, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      });
      que = res.data.message;
      //   console.log(res.data);
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
      if (localStorage.getItem("token") != null) {
        return (
          <Dashboard
            data={this.state.data}
            question={this.state.question}
            // error={this.state.error}
          />
        );
      }
    }
  }
}
