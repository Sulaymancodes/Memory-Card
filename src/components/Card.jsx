export default function Card ({characterName, updateNo}) {
    
    return (
      <div>
        <div 
         onClick={updateNo} className="flex items-center justify-center py-10 sm:py-12 lg:py-20 mt-4 px-6 sm:px-10 lg:px-20 text-center rounded-lg bg-slate-800 text-white hover:bg-cyan-900 transition-colors duration-300"
        >
          <p className="text-lg sm:text-xl lg:text-2xl">{characterName}</p>
        </div>
     </div>
    )
}