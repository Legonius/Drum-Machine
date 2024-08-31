import React, { useState } from "react";
import KeyPads from "./KeyPads";
import Display from "./Display";

const DrumBox = () => {
  const [display, setDisplay] = useState();
  const [power, setPower] = useState(true);
  const [vol, setVol] = useState(1);

  return (
    <div
      id="drum-machine"
      className="p-4 w-[90%] sm:w-[60%] flex flex-col-reverse sm:flex-row gap-2  border-4 border-yellow-600 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% "
    >
      <KeyPads setDisplay={setDisplay} power={power} vol={vol} />
      <Display
        display={display}
        power={power}
        setPower={setPower}
        vol={vol}
        setVol={setVol}
      />
    </div>
  );
};

export default DrumBox;
