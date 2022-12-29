import { useState, useEffect } from "react"

function App() {
  const [displayText, setDisplayText] = useState('')

  const handleClick = async (e) => {
    e.preventDefault();
    const audioTag = e.target.children[0]
    audioTag.play()
    setDisplayText(e.target.id)
  }

  useEffect(()=> {
    document.addEventListener('keydown', handleKeyDown, true)
  }, [])

  const handleKeyDown = (e) => {
    const keyPressed = e.key.toUpperCase();
    const audioTag = document.getElementById(keyPressed)
    if (audioTag) {
      audioTag.play()
      setDisplayText(audioTag.parentElement.id)
    } 
  }

  return (
    <div id="drum-machine">
      <div id="about">
        <h3 id="logo">drum machine</h3>
        <p id="author">by leonardo motta</p>
      </div>
      <div id="controls">
        <div id="display">{displayText}</div>
      </div>

      <div id="pad-bank">
        <div id="Heater-1" className="drum-pad" onClick={(e) => handleClick(e)}>
          <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
          <p>Q</p>
        </div>
        <div id="Heater-2" className="drum-pad" onClick={(e) => handleClick(e)}>
          <audio id="W" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
          <p>W</p>
        </div>
        <div id="Heater-3" className="drum-pad" onClick={(e) => handleClick(e)}>
          <audio id="E" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
          <p>E</p>
        </div>
        <div id="Heater-4" className="drum-pad" onClick={(e) => handleClick(e)}>
          <audio id="A" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
          <p>A</p>
        </div>
        <div id="Clap" className="drum-pad" onClick={(e) => handleClick(e)}>
          <audio id="S" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
          <p>S</p>
        </div>
        <div id="Open-HH" className="drum-pad" onClick={(e) => handleClick(e)}>
          <audio id="D" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
          <p>D</p>
        </div>
        <div id="Kick-n'-Hat" className="drum-pad" onClick={(e) => handleClick(e)}>
          <audio id="Z" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
          <p>Z</p>
        </div>
        <div id="Kick" className="drum-pad" onClick={(e) => handleClick(e)}>
          <audio id="X" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
          <p>X</p>
        </div>
        <div id="Closed-HH" className="drum-pad" onClick={(e) => handleClick(e)}>
          <audio id="C" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
          <p>C</p>
        </div>
      </div>
    </div>
  );
}

export default App;