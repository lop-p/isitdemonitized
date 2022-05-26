import { useState } from 'react'
import './App.css'


function predict() {
  // based on a random number, predict if the video is demonitized and then display the result to the id 'text'

  Math.random() > 0.5 ? document.getElementById('text').innerHTML = 'your video is demonitized' : document.getElementById('text').innerHTML = 'your video is not demonitized'

  // if video is demonitized, display css animation demonitized

  if (document.getElementById('text').innerHTML === 'your video is demonitized') {
    document.getElementById('text').style.animation = 'demonitized 1s normal forwards ease-in-out'
  }
  else {
    document.getElementById('text').style.animation = 'monitized 1s normal forwards ease-in-out'
  }
}





function App() {

  return (
    <div className="App">
      <header className="App-header">
        <button  id='text' onClick={predict}>click to see if your video is demonitized</button>
      </header>
    </div>
  )
}

export default App
