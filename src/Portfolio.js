import React from "react";
import Lacrosse from "../src/assets/lacrosse.jpeg";

const Portfolio = () => {
  return (
    <div style={{ border: "3px dashed purple" }}>
      <h1>Lets try some media</h1>
      <img
        style={{ border: "2px solid red", width: "200px" }}
        src={Lacrosse}
        alt="lacrosse"></img>
      <a href="https://parkpilot.onrender.com/">Park-Pilot</a>
      <br></br>
      <a href="https://react-jobly-1.onrender.com">Jobly</a>
      <p>This will be a componnet to show off some portfolio projects</p>
      <p>I'm thinking just a list of links.</p>

      <video
        controls
        src="https://ik.imagekit.io/ikmedia/example_video.mp4"
        width="1440"
        height="680"
      />
    </div>
  );
};

export default Portfolio;
