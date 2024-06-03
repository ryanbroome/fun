import React from "react";
// import valet from "../images/valet.jpeg";
import valet from "./images/valet.jpeg";
import Spinner from "./Spinner";

const HtmlTagsDemo = () => {
  return (
    <div style={{ border: "3px dashed purple" }}>
      <h1>HtmlTagsDemo</h1>
      <h1>Heading h1</h1>
      <h2>Heading h2</h2>
      <h3>Heading h3</h3>
      <h4>Heading h4</h4>
      <Spinner />
      <form style={{ border: "3px dashed orange" }}>
        Form $<label htmlFor="name">label $</label>
        <input
          // id="name"
          name="username"
          placeholder="input"></input>
        <button type="submit">submit</button>
      </form>
      <span>span</span>
      <span>span</span>
      <p>paragraph</p>
      <p>paragraph</p>
      <aside>aside</aside>
      <aside>aside</aside>

      <ul>
        unordered list
        <li>list item</li>
        <li>another list item</li>
      </ul>

      <ol>
        ordered list
        <li>list item</li>
        <li>another list item</li>
      </ol>
      <div>div</div>
      <img
        src={valet}
        alt="valet"
        height="100px"></img>
    </div>
  );
};

export default HtmlTagsDemo;
