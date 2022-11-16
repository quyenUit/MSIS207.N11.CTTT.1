import { useState } from "react";
import Drum from "./Component/Drum";
import tom1 from "./assets/sounds/tom-1.mp3";
import tom2 from "./assets/sounds/tom-2.mp3";
import tom3 from "./assets/sounds/tom-1.mp3";
import tom4 from "./assets/sounds/tom-3.mp3";
import snare from "./assets/sounds/snare.mp3";
import crash from "./assets/sounds/crash.mp3";
import kick from "./assets/sounds/kick-bass.mp3";
import "./App.css";

function App() {
  const [sounds, setSounds] = useState([
    {
      name: "tom1",
      sound: tom1,
      key: "W",
    },
    {
      name: "tom2",
      sound: tom2,
      key: "A",
    },
    {
      name: "tom3",
      sound: tom3,
      key: "S",
    },
    {
      name: "tom4",
      sound: tom4,
      key: "D",
    },
    {
      name: "snare",
      sound: snare,
      key: "J",
    },
    {
      name: "crash",
      sound: crash,
      key: "K",
    },
    {
      name: "kick",
      sound: kick,
      key: "L",
    },
  ]);

  return (
    <div className="App">
      <h1>The Drum Kit</h1>
      <div className="drums">
        {sounds.map((sound, i) => (
          <Drum
            setname={sound.name}
            key={i}
            letter={sound.key}
            sound={sound.sound}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
