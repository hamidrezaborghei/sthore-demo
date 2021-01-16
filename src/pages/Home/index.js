import React from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <div>
      <p>This is demo project for @sleegle/sthore package</p>
      <br />
      <p>
        We are using Json Placeholder API and sthore for managing{" "}
        <Link to="/posts">Posts</Link>
      </p>
      <br />
    </div>
  );
};

export default HomePage;
