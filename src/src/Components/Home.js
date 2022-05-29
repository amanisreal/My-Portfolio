import React from "react";
import "./home.css";

function Home(){
    return(
        <div className="home">
        <div className="side">
        <div className="leftside">
        <div className="bigfixed">
            <span className="big">W</span>
            <span className="writeup">Web developer</span>
            </div>
            </div>
        <div className="rightside">
            <h2 className="hello">HELLO</h2>
            <h4 className="name">I'm</h4>
            <h3 className="myname">Aman</h3>
        </div></div>
        </div>
    )
}

export default Home;