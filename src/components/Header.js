import React from "react";
import { Link } from "react-router-dom";
import ToggleKnob from "../components/ToggleKnob";
import History from "../history";
// import soundFile from "./pages/css/assets/SOUND_IN_KB.mp3";
import "./pages/css/Header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mute: true,
      // value: 1,
      isOn: false,
      sound: "",
      loading: false
    };
    this.sidebar = React.createRef();
    this.icon = React.createRef();
    this.url = "./pages/css/assets/TREASURO_AUDIO_FINAL.mp3";
    this.audio = new Audio(this.url);
    this.audio.addEventListener(
      "ended",
      function() {
        this.currentTime = 0;
        this.play();
      },
      false
    );
  }

  async componentDidMount() {
    // this.getSound();
    this.checkLogin();
    // await this.handleClick();
  }

  displayMenu = () => {
    this.sidebar.current.style.display = "block";
  };

  handleClose = () => {
    this.sidebar.current.style.display = "none";
  };

  handleClick = async () => {
    let sound = await require("./pages/css/assets/SOUND_IN_KB.mp3");
    await this.setState({ sound: sound });
    // await this.setState({ loading: false });
    await this.setState(prevState => ({
      isOn: !prevState.isOn,
      mute: !this.state.mute
    }));
    // console.log(this.state);
  };

  // getSound = async () => {
  // console.log(this.state);
  // return sound;
  // };

  handleLogout = () => {
    // console.log("logout");
    localStorage.removeItem("token");
    // window.location.reload();
    History.push("/login");
    this.sidebar.current.style.display = "none";
  };

  checkLogin = () => {
    if (localStorage.getItem("token") == null) return { display: "None" };
    else return { display: "block" };
  };

  render() {
    if (this.state.loading) {
      return <div className="loader"></div>;
    } else {
      return (
        <>
          <nav>
            <div className="menu">
              <span className="icon" onClick={this.displayMenu}>
                &#9781;
              </span>
              <div className="sidebar" ref={this.sidebar}>
                <span
                  className="close"
                  ref={this.icon}
                  onClick={this.handleClose}
                >
                  &#215;
                </span>
                <br />
                <Link onClick={this.handleClose} to="/home">
                  Home
                </Link>
                <br />
                <span className="sound">
                  Sound<span> </span>
                  <span className="toggle">
                    <button
                      className={`toggleContainer ${
                        this.state.isOn ? "isActive" : ""
                      }`}
                      onClick={() => this.handleClick()}
                    >
                      <ToggleKnob isOn={this.state.isOn} />
                    </button>
                  </span>
                </span>
                <br />
                <Link onClick={this.handleClose} to="/leaderboard">
                  Leaderboard
                </Link>
                <br />
                <Link onClick={this.handleClose} to="/rules">
                  Rules
                </Link>
                <br />
                <a
                  onClick={this.handleClose}
                  href="https://www.facebook.com/jssmmil/"
                >
                  Contact
                </a>
                <Link
                  style={this.checkLogin()}
                  onClick={this.handleLogout}
                  to="/login"
                >
                  Log Out
                </Link>
                <p className="footer">Powered By MMIL</p>
                <br />
              </div>
            </div>
          </nav>
          <div className="head"></div>
          <audio
            src={this.state.sound}
            // controls
            autoPlay
            loop
            muted={this.state.mute}
          />
        </>
      );
    }
  }
}
