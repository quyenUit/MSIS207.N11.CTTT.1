import { useEffect, useState } from "react";

function Drum(props) {
  const [playing, setPlaying] = useState(false);
  const play = () => {
    setPlaying(true);

    new Audio(props.sound).play();
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() === props.letter.toLowerCase()) {
        play();
      }
    });
  });

  return (
    <div className={`drum ${playing ? "playing" : ""}`} c onClick={play}>
      <div className={props.setname}>{props.letter}</div>
    </div>
  );
}

export default Drum;
