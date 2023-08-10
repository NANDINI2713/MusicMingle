import React, { useState, useEffect } from "react";
import { FaHeadphones, FaHeart, FaRegHeart } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import Songs from "./Songs";
import { BiSearchAlt } from "react-icons/bi";
import Singers from "./Singers";
import "./ArtistList.css";
import { useNavigate } from "react-router-dom";
import SongOfSinger from "./SongOfSinger";

function ArtistList() {
  const navigate = useNavigate();
  const [songs, setSingers] = useState(Singers);
  const [img, setImage] = useState(Singers[0].imgSrc);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const songs = document.querySelectorAll(".songs");

    function changeActiveMenu() {
      songs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    songs.forEach((n) => n.addEventListener("click", changeActiveMenu));
  }, []);

  const changeFavourite = (id) => {
    Singers.forEach((song) => {
      if (song.id == id) {
        song.favourite = !song.favourite;
      }
    });
    setSingers([...Singers]);
  };

  const setMainSong = (imgSrc) => {
    setImage(imgSrc);
  };

  const changeSong = () => {
    navigate("/ArtistSong");
  };

  return (
    <div className="audioList">
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <i className="searchIcon">
          <BiSearchAlt />
        </i>
      </div>

      <h2 className="title">
        The List <span>{`${Singers.length} Singers`}</span>
      </h2>

      <div className="songContainer">
        {Singers &&
          Singers.filter((song) => {
            return search.toLowerCase() === ""
              ? song
              : song.artist.toLowerCase().includes(search);
          }).map((song, index) => (
            <div
              className="songs"
              key={song?.id}
              value={song}
              onClick={() => setMainSong(song?.song, song?.imgSrc)}
            >
              <div className="count">{`#${index + 1}`}</div>
              <div className="song" onClick={() => changeSong(song.artist)}>
                <div className="image">
                  <img src={song?.imgSrc} />
                </div>
                <div className="section">
                  <p className="singerName">{song?.artist}</p>
                  <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                    </p>
                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                    </p>
                    <div
                      className="favourite"
                      onClick={() => changeFavourite(song?.id)}
                    >
                      {song?.favourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ArtistList;
