import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-7xl font-bold pb-8">
        welcome to unwind hotel booking
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, vero.
      </p>
      <div className="w-fit flex items-center justify-center gap-4 mt-8 border-2 border-gray-400 overflow-hidden rounded-[10px]">
        <button className="bg-gray-400 text-black font-bold p-4" onClick={() => setCount((prev) => prev<10 ? prev + 1: prev)}>+</button>
        <span className="">{count}</span>
        <button className="bg-gray-400 text-black font-bold p-4" onClick={() => setCount ((prev)=> prev>0 ?prev-1 :0)}>-</button>
      </div>
    </>
  );
}

export default App;
