import { useEffect, useState } from "react";
import "./App.css";
import Display from "./Display.jsx";
import StopWatch from "./StopWatch.jsx";
import Track from "./Track.jsx";

export default function App() {
  const [isActive, setisActive] = useState(false);
  const [isPause, setIsPause] = useState(true);
  const [time, setTime] = useState(0);
  const [track, setTrack] = useState([]);

  useEffect(() => {
    let interval = null;

    if (isActive == true && isPause == false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPause]);

  function start() {
    setisActive(true);
    setIsPause(false);
  }

  function pause() {
    setIsPause(!isPause);
  }

  function reset() {
    setisActive(false);
    setTime(0);
  }

  function formatTime() {
    let hour = Math.floor(time / (1000 * 60 * 60));
    let minute = Math.floor(time / (1000 * 60) % 60);
    let second = Math.floor(time / (1000) % 60);
    let ms = Math.floor((time % 1000) / 10);

    hour = String(hour).padStart(2, "0");
    minute = String(minute).padStart(2, "0");
    second = String(second).padStart(2, "0");
    ms = String(ms).padStart(2, "0");

    return hour > 0
      ? `${hour}.${minute}.${second}.${ms}`
      : `${minute}.${second}.${ms}`;
  }

  function trackTime() {
    setTrack((track) => {
      return [formatTime(), ...track];
    });
  }

  return (
    <>
      <div className="container">
        <Track track={track} />
        <Display time={formatTime()} />
        <StopWatch
          isActive={isActive}
          isPause={isPause}
          start={start}
          pause={pause}
          reset={reset}
          trackTime={trackTime}
        />
      </div>
    </>
  );
}
