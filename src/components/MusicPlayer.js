import React, { useEffect, useRef, useState } from "react";
import "./MusicPlayer.css";
import {
  FaRegHeart,
  FaHeart,
  FaStepBackward,
  FaBackward,
  FaPause,
  FaPlay,
  FaForward,
  FaStepForward,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

function MusicPlayer({ song, imgSrc, auto }) {
  const [isLove, setLove] = useState(false);
  const [isPlaying, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadmetadata, audioPlayer?.current?.readyState]);

  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlay(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const CalculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;

    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnMin}:${returnSec}`;
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--player-width",
      `${(progressBar.current.value / duration) * 100} %`
    );
    setCurrentTime(progressBar.current.value);
  };

  const changedLoved = () => {
    setLove(!isLove);
  };

  return (
    <div className="musicPlayer">
      <div className="songImage">
        <img src={imgSrc}></img>
      </div>
      <div className="songAttributes">
        <audio src={song} preload="metaData" ref={audioPlayer} />
        <div className="top">
          <div className="left">
            <div className="loved" onClick={changedLoved}>
              {isLove ? (
                <i>
                  <FaRegHeart />
                </i>
              ) : (
                <i>
                  <FaHeart />
                </i>
              )}
            </div>
            <div className="download">
              <i>
                <BsDownload />
              </i>
            </div>
          </div>
          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playPause" onClick={changePlayPause}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>
          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>
        <div className="bottom">
          <div className="currentTime">{CalculateTime(currentTime)}</div>
          <input
            type="range"
            className="progressBar"
            ref={progressBar}
            onChange={changeProgress}
            autoPlay={auto}
          />
          <div className="duration">
            {duration && !isNaN(duration) && CalculateTime(duration)
              ? duration && !isNaN(duration) && CalculateTime(duration)
              : "00.00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
