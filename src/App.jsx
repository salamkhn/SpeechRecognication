
import { useState } from "react"
import "./Style.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const App = () => {
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()


  // START LISTINGIN
  const listening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-Pk' })

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  // FUNCTION FOR THE HANDLING COPY
  const handleCopy = () => {
    navigator.clipboard.writeText(transcript)
    alert("Text is Copied")
    SpeechRecognition.resetTranscript();
  }
  return (<>
    <div className="main-container">
      <h1 className="heading">Speech to text Converter</h1>
      <div className="main-div">
        <p>{transcript}</p>
      </div>
      <div className="btns">
        <button onClick={handleCopy} className="copy">
          Copy
        </button>
        <button onClick={SpeechRecognition.stopListening} className="stop">
          Stop listening
        </button>
        <button onClick={listening} className="start">
          Start Listening
        </button>
      </div>
    </div>

  </>)

}
export default App
