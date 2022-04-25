import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";

const App = () =>{
  return(
    <div>
      <Menu />
      <Header />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('body'));
