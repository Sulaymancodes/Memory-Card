export default function Navbar ({bestScore,currentScore}) {
    return (
        <div className="w-full bg-slate-800 text-yellow-50">
          <div className="md:w-2/3 w-full p-4 flex justify-between my-0 mx-auto">
            <h1 className="">MEMORY GAME</h1>    
            <div>
                <p>Best Score: {bestScore}</p>
                <p>Current Score: {currentScore}</p>
            </div>      
          </div>
        </div>
    )
}