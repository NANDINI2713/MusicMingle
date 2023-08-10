import React, { useEffect } from "react";
import "./MainContainer.css";
import AudioList from "./AudioList";
import ArtistList from "./ArtistList";
import { useLocation } from "react-router-dom";
import SongOfArtist from "./SongOfArtist";

function MainContainer() {
  const location = useLocation();
  const isHomePage = location.pathname === "/Home";
  const isArtistPage = location.pathname === "/Artists";
  const isArtistSongPage = location.pathname === "/ArtistSong";

  return (
    <div className="mainContainer">
      {isHomePage && <AudioList />}
      {isArtistPage && <ArtistList />}
      {isArtistSongPage && <SongOfArtist />}
    </div>
  );
}

export default MainContainer;
