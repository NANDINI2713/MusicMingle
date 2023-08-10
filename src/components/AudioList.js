import React, { useState, useEffect } from "react";
import { FaHeadphones, FaHeart, FaRegHeart } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import Songs from "./Songs";
import MusicPlayer from "./MusicPlayer";
import { BiSearchAlt } from "react-icons/bi";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

function AudioList() {
  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(Songs[0].song);
  const [img, setImage] = useState(Songs[0].imgSrc);
  const [search, setSearch] = useState("");
  const [showLikedSongs, setShowLikedSongs] = useState(false);

  useEffect(() => {
    const songs = document.querySelectorAll(".songs");

    function changeActiveMenu() {
      songs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    songs.forEach((n) => n.addEventListener("click", changeActiveMenu));
  }, []);

  const changeFavourite = (id) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === id ? { ...song, favourite: !song.favourite } : song
      )
    );
  };

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
  };

  const likedSongs = songs.filter((song) => song.favourite);

  return (
    <>
      <div className="like">
        <h2 onClick={() => setShowLikedSongs(!showLikedSongs)}>
          {showLikedSongs ? <FcLike /> : <FcLikePlaceholder />}
        </h2>
      </div>

      <div className="audioList">
        <div className="searchSongBox">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <i className="searchIcon">
            <BiSearchAlt />
          </i>
        </div>
        <h2 className="titleSong">
          The List <span>{`${songs.length} songs`}</span>
        </h2>
        <div className="songsContainer">
          {(!showLikedSongs ? songs : likedSongs)
            .filter((song) => {
              return search.toLowerCase() === ""
                ? song
                : song.songName.toLowerCase().includes(search);
            })
            .map((song, index) => (
              <div
                className="songs"
                key={song?.id}
                onClick={() => setMainSong(song?.song, song?.imgSrc)}
              >
                <div className="count">{`#${index + 1}`}</div>
                <div className="song">
                  <div className="imgBox">
                    <img src={song?.imgSrc} alt={song?.songName} />
                  </div>
                  <div className="section">
                    <p className="songName">
                      {song?.songName}
                      <span className="spanArtist">{song?.artist}</span>
                    </p>
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

        <MusicPlayer song={song} imgSrc={img} />
      </div>
    </>
  );
}

export default AudioList;
