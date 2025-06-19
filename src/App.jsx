import react from "./assets/React.png";
import tailwind from "./assets/TailwindCSS.png";

function App() {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col bg-slate-900">
            <h1 className="text-3xl font-bold text-white
            text-center">React + Tailwind CSS!</h1>
            <div className="flex items-center justify-center mt-10 gap-10">
                <img className="w-24 h-21" src={react} alt="React"/>
                <img className="w-24 h-16" src={tailwind} alt="Tailwind"/>
            </div>
            <button className="text-base mt-10 bg-slate-800 text-slate-300 p-5
            rounded-full font-bold hover:bg-sky-700" 
            onClick={() => alert("Welcome to React + Tailwind!")}>Click Me!</button>
        </div>
    )
}

export default App;