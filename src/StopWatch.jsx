import React from "react";

export default function BtnTime({
  isActive,
  isPause,
  start,
  pause,
  reset,
  trackTime,
}) {
  const style = {
    outline: 'none'
  }
  return (
    <>
      {!isActive ? (
        <div className="stopwatch">
          <button style={style} onClick={start}>start</button>
        </div>
      ) : (
        <div className="stopwatch">
          <button style={style} onClick={trackTime}>
            track
          </button>
          {!isPause ? (
            <button style={style} onClick={pause}>pause</button>
          ) : (
            <button style={style} onClick={pause}>resume</button>
          )}
          <button style={style} onClick={reset}>reset</button>
        </div>
      )}
    </>
  );
}
