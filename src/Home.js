import React from "react";
import squirrel from "./resources/squirrel.jpg"
import winterTree from  "./resources/winter-tree.jpg"

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const Home = () => {
  return (
    <div className="app-content">
      <h1>Welcome to Kennedy's test application</h1>
      <h2>I'm glad you're here</h2>
      <img src={winterTree} alt="a tree covered in snow"></img>
    </div>
  );
};

export default Home;


