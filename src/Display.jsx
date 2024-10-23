import React from "react";

export default function Display({ time }) {
  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <h1 className="display">{time}</h1>
        </div>
      </div>
    </>
  );
}
