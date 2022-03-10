import React from 'react'

const Word = () => {

  const wordList = [
    'thought',
    'layla',
    'helena'
  ]

  const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const voice = (toSpeech) => {
    let msg = new SpeechSynthesisUtterance()
    msg.text = toSpeech
    window.speechSynthesis.speak(msg)
  }

  const handleLetterClick = (letter) => {
    console.log('Click! ' + letter)
    voice(letter)
  }

  const handleButtonClick = () => {
    console.log(currentWord.join(''))
    voice(currentWord.join(''))
  }

  let currentWord = wordList[getRandomInteger(0, wordList.length)].split('')

  const printLetters = currentWord.map( letter => {
    return (
      <span onClick={ () => handleLetterClick(letter) }>{letter}</span>
    )
  })

  return (
    <div className='wordWrapper'>
      <div className='word'>
        <div className='currentWord'>
          <h2>{ printLetters }</h2>
        </div>
        <div className='buttonContainer'>
          <button onClick={handleButtonClick}>Click</button>
        </div>
      </div>

    </div>
  )
}

export default Word