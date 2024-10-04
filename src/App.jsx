import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  const [score, setScore] = useState(0);
  const [character, setCharacter] = ('');
  const characterNames = ['Sulaiman', 'Aliyu', 'Muhammad']
  function onClickCard () {
    setScore(score + 1)
  }
  useEffect(() => {

  },[character])

  return (
    <>
      <Navbar bestScore={score} currentScore={7} />
      <div className='w-2/3 my-0 mx-auto flex justify-between'>
        {/* <Card characterName={'Sulaiman'} updateNo={onClickCard} />
        <Card characterName={'Isa'} updateNo={() => setScore(score + 1)}/>
        <Card characterName={'Muhammad'} updateNo={() => setScore(score + 1)}/> */}
        
      </div>
      
    </>
  )
}

export default App
