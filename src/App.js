import React, { useState } from "react";
import { Post } from "./components/Post";
import "./styles/App.css"

function App() {


  return (
    <div className="App">
      <Post title="Javascript" description="Program language" id="1"/>
    </div>
  );
}

export default App;
