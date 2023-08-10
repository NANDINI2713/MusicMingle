import React, { useState, useEffect } from "react";
import { FaHeadphones, FaHeart, FaRegHeart } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import SongOfSinger from "./SongOfSinger";
import MusicPlayer from "./MusicPlayer";
import { BiSearchAlt } from "react-icons/bi";
import Singers from "./Singers";
import "./SongOfArtist.css";

function SongOfArtist() {
  const [songs, setSongs] = useState(SongOfSinger);
  const [song, setSong] = useState(SongOfSinger[0].song);
  const [img, setImage] = useState(SongOfSinger[0].imgSrc);
  const [search, setSearch] = useState("");
  const [selectedArtistId, setSelectedArtistId] = useState(null);

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

  const getSongsByArtist = (artistId) => {
    setSelectedArtistId(artistId);
    const filteredSongs = SongOfSinger.filter((song) => song.id === artistId);
    setSongs(filteredSongs);
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
      <h2 className="title"></h2>

      <div className="songContainer">
        {SongOfSinger &&
          SongOfSinger.filter((artist) => {
            return search.toLowerCase() === ""
              ? artist
              : artist.artist.toLowerCase().includes(search);
          }).map((artist) => (
            <div
              className={
                selectedArtistId === artist?.id ? "songs active" : "songs"
              }
              key={artist?.id}
              onClick={() => {
                getSongsByArtist(artist?.id);
                setMainSong(artist?.song, artist?.imgSrc);
              }}
            >
              <div className="song">
                <div className="artistImage">
                  <img src={artist?.imgSrc} alt={`Artist: ${artist?.artist}`} />
                </div>
                <div className="section">
                  <p className="songName">
                    {artist?.songName}
                    <span className="spanArtist">{artist?.artist}</span>
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
                      onClick={() => changeFavourite(artist?.id)}
                    >
                      {artist?.favourite ? (
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
      <div className="musicPlayer"></div>
      <MusicPlayer song={song} imgSrc={img} />
    </div>
  );
}

export default SongOfArtist;
