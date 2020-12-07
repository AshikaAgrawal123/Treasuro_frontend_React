import React from "react";
import axios from "axios";
import BaseUrl from "../../api/Url";
import "./css/leaderboard.css";

export default class LeaderBoard extends React.Component {
  state = {
    list: [],
    loading: false
  };
  componentDidMount = async () => {
    let url = `${BaseUrl}/api/user/leaderboard`;
    let res = await axios.get(url);
    await this.setState({ list: res.data.data.users });
    await this.setState({ loading: false });
    this.getList();
  };
  getList = () => {
    // console.log(this.state.list);
    return this.state.list.map((item, index) => {
      // console.log(item.username);
      return (
        <li key={index}>
          {/* {index + 1}.)
          {item.username}
          {item.score} */}
          <span className="right">{index + 1} </span>
          <span className="center">{item.username}</span>
          <span className="left">{item.score}</span>
        </li>
      );
    });
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
        <div className="leader-comp">
          <div className="leader-box">
            <h1>LEADERBOARD</h1>
            <ol>{this.getList()}</ol>
          </div>
          {/* <div className="user-details">
            <p>Your Current Position: 123</p>
            <p>Your Current Points: 8000</p>
          </div> */}
        </div>
      );
    }
  }
}
