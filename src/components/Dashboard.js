import React from "react";
import "./pages/css/Dashboard.css";

export default class Dashboard extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div className="dash-box">
        <div className="userInfo">
          {/* <p>
            User Name: <span className="value">{this.props.data.username}</span>
          </p>
          <p>
            level: <span className="value">{this.props.data.level}</span>
          </p>
          <p>
            attempts left: <span className="value">{this.props.data.top / 2}</span>
          </p> */}
          <p>
            <span className="key">
              User&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:{" "}
            </span>
            <span className="value">{this.props.data.username}</span>
          </p>
          <p>
            <span className="key level">
              Level &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;:
            </span>{" "}
            <span className="value">{this.props.data.level}</span>
          </p>
          <p>
            <span className="key level">
              Score &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
            </span>{" "}
            <span className="value">{this.props.data.score}</span>
          </p>
          <p>
            <span className="key">Attempts :</span>{" "}
            <span className="value">{this.props.data.top}</span>
          </p>
        </div>
        <div className="question">
          {/* <p>{this.props.question}</p> */}
          <p>{this.props.question}</p>
          <p>{this.props.error}</p>
        </div>
      </div>
    );
  }
}
