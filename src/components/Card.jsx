export default function Card ({characterName, updateNo}) {
    
    return (
        <div>
          <div onClick={updateNo} className="py-20 mt-4 px-20   text-center rounded-lg bg-slate-800 text-white hover:bg-cyan-900">
            <p>{characterName}</p>
          </div>
        </div>
    )
}