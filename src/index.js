import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App(){

  function activeMenu(){  
      let li = document.querySelectorAll(".li");
      let sec = document.querySelectorAll("section");

      let len = sec.length;
      while(--len && window.scrollY + 97 < sec[len].offsetTop){}
      li.forEach(ltx => ltx.classList.remove("active"));
      li[len].classList.add("active");
  }

  return(
    <div onScroll={activeMenu} onLoad={activeMenu}>
      <Menu />
      <Header />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('body'));
