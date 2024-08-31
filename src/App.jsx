import DrumBox from "./components/DrumBox";

function App() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center items-center gap-3">
      <h1 className="text-white text-2xl font-extrabold">
        Drum Machine Project with React
      </h1>
      <DrumBox />
    </div>
  );
}

export default App;
