import React from "react";
import "./Home.css";
import LeftMenu from "./LeftMenu";
import MainContainer from "./MainContainer";
import RightMenu from "./RightMenu";

function Home() {
  return (
    <div className="home">
      <>
        <LeftMenu />
        <MainContainer />
        <RightMenu />
        <div className="background"></div>
      </>
    </div>
  );
}

export default Home;
