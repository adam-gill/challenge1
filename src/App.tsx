// import { useState } from 'react'

import TypewriterComponent from "typewriter-effect";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Lebron James</h1>
        <img className="lebron" src="/lebron.jpg"/>

        <TypewriterComponent
            options={{
              strings: [
                "You are my sunshine, my only sunshine. You make me happy when skies are grey."
              ],
              autoStart: true,
              loop: true,
              delay: 80,
            }}
          />
      </div>
    </>
  );
}

export default App;
