import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    const savedBestScore = localStorage.getItem('bestScore');
    return savedBestScore ? parseInt(savedBestScore, 10) : 0;
  });
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState([
    {name:'🐵 Monkey',clicked:false},
    {name:'🐶 Dog',clicked:false},
    {name:'🐱 Cat',clicked:false},
    {name:'🐼 Panda',clicked:false},
    {name:'🦁 Lion',clicked:false},
    {name:'🐸 Frog',clicked:false},
    {name:'🦊 Fox',clicked:false},
    {name:'🐧 Penguin',clicked:false},
  ]);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
      localStorage.setItem('bestScore', score.toString());
    }
  }, [score, bestScore]);

  function handlePlayAgain() {
    setEmojis(prevEmojis => prevEmojis.map(emoji => ({ ...emoji, clicked: false })));
    setScore(0);
    setIsOpen(false);
  }

  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function handleClick(index) {
    setEmojis(prevEmojis => {
      const clickedEmoji = prevEmojis[index];
      
      if (clickedEmoji.clicked) {
        console.log('already clicked');
        setIsOpen(true);
        return prevEmojis; // Don't shuffle if game over
      } else {
        setScore(prevScore => {
          const newScore = prevScore + 1;
          return newScore;
        });
        const updatedEmojis = prevEmojis.map((emoji, i) => 
          i === index ? { ...emoji, clicked: true } : emoji
        );
        return shuffleArray(updatedEmojis);
      }
    });
  }

  return (
    <>
      <Navbar bestScore={bestScore} currentScore={score} />
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-2/3 my-0 mx-auto'>
        {emojis.map((emoji, index) => (
          <Card key={emoji.name} characterName={emoji.name} updateNo={() => handleClick(index)} />
        ))}
      </div>
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center'>
          <div className='bg-slate-200 p-8 rounded-md flex flex-col items-center'>
            <p className='text-sm'>Better Luck Next Time</p>
            <p className='text-md text-red-500'>You Clicked On The Same Card Twice</p>
            <p className='text-md'>Your Score: {score}</p>
            <p className='text-md'>Best Score: {bestScore}</p>
            <button className='p-2 mt-2 hover:bg-green-800 hover:text-white rounded-md bg-green-500' onClick={handlePlayAgain}>Play Again</button>
          </div>
        </div>
      )}
    </>
  )
}

export default App