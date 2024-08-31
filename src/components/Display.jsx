import React, { useEffect, useState } from "react";

const Display = ({ display, power, setPower, vol, setVol }) => {
  const [sound, setSound] = useState("");
  useEffect(() => {
    switch (display) {
      case "Q":
        setSound("Heater 1");
        break;
      case "W":
        setSound("Heater 2");
        break;
      case "E":
        setSound("Heater 3");
        break;
      case "A":
        setSound("Heater 4");
        break;
      case "S":
        setSound("Clap");
        break;
      case "D":
        setSound("Open HH");
        break;
      case "Z":
        setSound("Kick n' Hat");
        break;
      case "X":
        setSound("Kick");
        break;
      case "C":
        setSound("Closed HH");
        break;
    }
  }, [display]);
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full h-full sm:w-1/2 ">
      <div className="flex flex-col items-center">
        <p className="text-black text-xl">Power</p>
        <div
          onClick={() => setPower(!power)}
          className="h-7 bg-black w-16 border-2"
        >
          <div
            className={`bg-yellow-800 w-1/2 h-full  mr-0 ${
              power ? "ml-auto" : ""
            }`}
          ></div>
        </div>
      </div>
      <div
        id="display"
        className=" w-36 h-10 bg-white text-black content-center text-center py-1"
      >
        {power ? sound : ""}
      </div>
      <div className="flex flex-col items-center ">
        <label htmlFor="volume-slider">Volume: {vol * 100}%</label>
        <input
          id="volume-slider"
          onChange={(e) => setVol(e.target.value)}
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={vol}
        />
      </div>
    </div>
  );
};

export default Display;
