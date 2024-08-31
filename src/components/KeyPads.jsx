import React, { useEffect } from "react";
const KeyPads = ({ setDisplay, power, vol }) => {
  const HandleKeyPad = (K) => {
    if (document.getElementById(K) && power) {
      document.getElementById(K).currentTime = 0;
      document.getElementById(K).volume = vol;
      document.getElementById(K).play();
      setDisplay(K);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (power) {
        const key = e.key.toUpperCase();
        HandleKeyPad(key);
        document.getElementById(key).parentElement.style.backgroundColor =
          "orange";
        setTimeout(() => {
          document.getElementById(key).parentElement.style.backgroundColor =
            "black";
        }, 100);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [power, vol]);
  return (
    <div
      id="drum-pad"
      className="w-full sm:w-1/2 grid grid-cols-3 gap-1 col-span-3 text-lg"
    >
      <span
        id="Heater-1"
        onClick={() => HandleKeyPad("Q")}
        className="drum-pad aspect-square content-center p-3 border-2 border-violet-800 text-white text-lg w-full h-full drop-shadow-md shadow-white active:bg-violet-700 active:text-black rounded text-center"
      >
        <audio
          id="Q"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
          className="clip"
        />
        Q
      </span>
      <span
        id="Heater-2"
        onClick={() => HandleKeyPad("W")}
        className="drum-pad aspect-square content-center p-3 border-2 border-violet-800 text-white text-lg w-full h-full drop-shadow-md shadow-white active:bg-violet-700 active:text-black rounded text-center"
      >
        <audio
          id="W"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
          className="clip"
        />
        W
      </span>
      <span
        id="Heater-3"
        onClick={() => HandleKeyPad("E")}
        className="drum-pad aspect-square content-center p-3 border-2 border-violet-800 text-white text-lg w-full h-full drop-shadow-md shadow-white active:bg-violet-700 active:text-black rounded text-center"
      >
        <audio
          id="E"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
          className="clip"
        />
        E
      </span>
      <span
        id="Heater-4"
        onClick={() => HandleKeyPad("A")}
        className="drum-pad aspect-square content-center p-3 border-2 border-violet-800 text-white text-lg w-full h-full drop-shadow-md shadow-white active:bg-violet-700 active:text-black rounded text-center"
      >
        <audio
          id="A"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
          className="clip"
        />
        A
      </span>
      <span
        id="Clap"
        onClick={() => HandleKeyPad("S")}
        className="drum-pad aspect-square content-center p-3 border-2 border-violet-800 text-white text-lg w-full h-full drop-shadow-md shadow-white active:bg-violet-700 active:text-black rounded text-center"
      >
        <audio
          id="S"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
          className="clip"
        />
        S
      </span>
      <span
        id="Open-HH"
        onClick={() => HandleKeyPad("D")}
        className="drum-pad aspect-square content-center p-3 border-2 border-violet-800 text-white text-lg w-full h-full drop-shadow-md shadow-white active:bg-violet-700 active:text-black rounded text-center"
      >
        <audio
          id="D"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
          className="clip"
        />
        D
      </span>
      <span
        id="Kick-n'-Hat"
        onClick={() => HandleKeyPad("Z")}
        className="drum-pad aspect-square content-center p-3 border-2 border-violet-800 text-white text-lg w-full h-full drop-shadow-md shadow-white active:bg-violet-700 active:text-black rounded text-center"
      >
        <audio
          id="Z"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
          className="clip"
        />
        Z
      </span>
      <span
        id="Kick"
        onClick={() => HandleKeyPad("X")}
        className="drum-pad aspect-square content-center p-3 border-2 border-violet-800 text-white text-lg w-full h-full drop-shadow-md shadow-white active:bg-violet-700 active:text-black rounded text-center"
      >
        <audio
          id="X"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
          className="clip"
        />
        X
      </span>
      <span
        id="Closed-HH"
        onClick={() => HandleKeyPad("C")}
        className="drum-pad aspect-square content-center p-3 border-2 border-violet-800 text-white text-lg w-full h-full drop-shadow-md shadow-white active:bg-violet-700 active:text-black rounded text-center"
      >
        <audio
          id="C"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
          className="clip"
        />
        C
      </span>
    </div>
  );
};

export default KeyPads;
