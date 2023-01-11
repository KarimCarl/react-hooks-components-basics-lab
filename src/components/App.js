import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

/* write an <About> component here */
function About(){
  return (
    <div id="about">
      <h1>About</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <div> <NavBar /> </div>
      <div> <Home /> </div>
      <div> <About /> </div>
    </div>
  );
}

export default App;
