import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>CONTACT US:</h1>
        <p className="infos">
          <span className="info">CALL : </span>
          <a href="tel:8586037956">8586037956</a>
        </p>
        <p className="infos">
          <span className="info">FACEBOOK : </span>
          <a href="https://www.facebook.com/jssmmil/">facebook/jssmmil</a>
        </p>
        <p className="infos">
          <span className="info">INSTAGRAM : </span>
          <a href="https://www.instagram.com/jssmmil/">insta/jssmmil</a>
        </p>
        <form id="contact" method="post">
          <h3>Have Suggestions? Let us Know!!</h3>
          <textarea
            className="text"
            id="comment"
            value="Type Here"
            required
          ></textarea>
          <main className="container">
            <button className="myButt one">
              <div className="insider"></div>
              Submit
            </button>
          </main>
        </form>
      </div>
    );
  }
}
