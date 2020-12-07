import React from "react";
import { Link } from "react-router-dom";
import "./css/Rules.css";

export default class Rules extends React.Component {
  render() {
    return (
      <div className="rule-box">
        <h1>Rules of Treasuro </h1>
        <ul>
          <li>
            Game Play: At each level, you will be provided with a clue which
            will be pointing towards a location. Once you crack the clue, you
            will find a QR code at the location which will lead you to the next
            level if the answer is correct.
          </li>
          <li>Duration: The online quest which will be live for two days.</li>
          <li>
            Every level holds 10 points. After each wrong submission, the total
            points will get deducted by 2.For eg.10->8->6->4->2. Attempts Points
            1st attempt correct answer 10 points 2nd attempt correct answer 8
            points 3rd attempt correct answer 6 points 4th attempt correct
            answer 4 points 5th attempt correct answer 2 points Wrong answer 5th
            time Disqualified The maximum number of attempts for each level is
            5. After 5 attempts, your account will be blocked. All the
            submissions of a level will be recorded in our DB so avoid guesswork
            and play fair.
          </li>
          <li>
            Solutions: Questions are of two types, online or offline. Offline
            questions will be pointing towards only one location in the college.
          </li>
          <li>
            Within the college, a Special QR code with the tag "Scan at your own
            Risk" will be set up at different places. You can try your luck
            atmost 5 times using these QR codes. These can prove to be lucky or
            unlucky for you. So Beware.
          </li>
          <li>
            Appeals: There are no appeals in this game but if you think there is
            an error, feel free to contact us.
          </li>
          <li>Usage of foul names will lead to disqualification.</li>
          <li style={{ fontSize: "1.6em" }}>
            The society holds the right to disqualify any individual in case of
            any unethical means.
            <br />
            The decision of society is final
          </li>
        </ul>

        <Link to="/login">Start</Link>
      </div>
    );
  }
}
