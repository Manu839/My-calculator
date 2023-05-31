
import { useState } from 'react';
import './App.css';
function App() {
  const [result, setResult] = useState("0")
  const handleOnClick =(e)=>{
    setResult(result.concat(e.target.name))
  }
  const Ac =()=>{
    setResult("")
  }
  const c =()=>{
    setResult(result.slice(0,-1))
  }
  const calc =()=>{
    try{
    setResult(eval(result).toString())
    }catch(eRR){
      setResult("ERROR")
    }
  }


  return (<>
  <div className=' bg-slate-400 h-screen py-14 '>
  <div className=' bg-gray-800 h-fit w-fit p-8 shadow-blue-900 shadow-inner hover:shadow-red-800 hover:border-red-900 border-2 border-slate-800 ml-auto mr-auto rounded-3xl'>
    <div className='h-20 shadow-inner shadow-gray-800 md:w-72 w-64 ml-auto mr-auto mb-7 rounded-2xl text-2xl md:text-3xl overflow-hidden bg-teal-800 p-6 text-zinc-900 font-semibold font-mono'>{result}
    </div>
    <div className='h-fit w-fit rounded-3xl ml-auto mr-auto'>
      <div className='flex space-x-3 md:space-x-5 md:pl-5 md:pr-5 pl-3 pr-3 p-3 text-white text-2xl'>
      <div>
      <button  onClick={Ac} className='border-2 active:scale-90 shadow-inner shadow-orange-800 border-gray-900 w-14 h-14 rounded-xl hover:border-red-700  bg-black'>AC</button>
      </div>
      <div>
      <button onClick={c} className='border-2 active:scale-90 shadow-inner shadow-orange-800 border-gray-900 w-14 h-14 rounded-xl hover:border-red-700  bg-black'>C</button>
      </div>
      <div>
      <button name='%' onClick={handleOnClick} className='border-2 active:scale-90 shadow-inner shadow-orange-800 hover:border-red-700 border-gray-900 w-14 h-14 rounded-xl  bg-black'>%</button>
      </div>
      <div>
      <button name="/" onClick={handleOnClick} className='border-2 active:scale-90 shadow-inner shadow-orange-800 hover:border-red-700 border-gray-900 w-14 h-14 rounded-xl  bg-black'>/</button>
      </div>
      </div>
      <div className='flex md:space-x-5 md:pl-5 md:pr-5 pl-3 pr-3 p-3 space-x-3 text-white text-2xl '>
      <div>
        <button name="7" onClick={handleOnClick} className='border-2 active:scale-90 shadow-inner shadow-orange-800 hover:border-gray-500 border-gray-900 w-14 h-14 rounded-xl  bg-black'>7</button>
      </div>
      <div>
      <button name="8" onClick={handleOnClick} className='border-2 active:scale-90 shadow-inner shadow-orange-800 hover:border-gray-500 border-gray-900 w-14 h-14 rounded-xl  bg-black'>8</button>
      </div>
      <div>
      <button name="9" onClick={handleOnClick} className='border-2 active:scale-90 shadow-inner shadow-orange-800 hover:border-gray-500 border-gray-900 w-14 h-14 rounded-xl  bg-black'>9</button>
      </div>
      <div>
      <button name="*" onClick={handleOnClick} className='border-2 active:scale-90 shadow-inner shadow-orange-800 hover:border-red-700 border-gray-900 w-14 h-14 rounded-xl  bg-black'>*</button>
      </div>
      </div>
      <div className='flex md:space-x-5 space-x-3 md:pl-5 p-3 md:pr-5 pl-3 pr-3 text-white text-2xl '>
      <div>
        <button name="4" onClick={handleOnClick} className='border-2 active:scale-90 shadow-inner shadow-orange-800 hover:border-gray-500 border-gray-900 w-14 h-14 rounded-xl  bg-black'>4</button>
      </div>
      <div>
      <button name="5" onClick={handleOnClick} className='border-2 active:scale-90 shadow-inner shadow-orange-800 hover:border-gray-500 border-gray-900 w-14 h-14 rounded-xl  bg-black'>5</button>
      </div>
      <div>
      <button name="6" onClick={handleOnClick} className='border-2 active:scale-90 shadow-inner shadow-orange-800 hover:border-gray-500 border-gray-900 w-14 h-14 rounded-xl  bg-black'>6</button>
      </div>
      <div>
      <button name="-" onClick={handleOnClick} className='border-2 active:scale-90 shadow-inner shadow-orange-800 hover:border-red-700 border-gray-900 w-14 h-14 rounded-xl  bg-black'>-</button>
      </div>
      </div>
      <div className='flex md:space-x-5 space-x-3 md:pl-5 p-3 md:pr-5 pl-3 pr-3 text-white text-2xl '>
      <div>
        <button name="1" onClick={handleOnClick} className='border-2 active:scale-90 shadow-inner shadow-orange-800 hover:border-gray-500 border-gray-900 w-14 h-14 rounded-xl  bg-black'>1</button>
      </div>
      <div>
      <button name="2" onClick={handleOnClick} className='border-2 active:scale-90 shadow-inner shadow-orange-800 hover:border-gray-500 border-gray-900 w-14 h-14 rounded-xl  bg-black'>2</button>
      </div>
      <div>
      <button name="3" onClick={handleOnClick} className='border-2 active:scale-90 shadow-inner shadow-orange-800 hover:border-gray-500 border-gray-900 w-14 h-14 rounded-xl bg-black'>3</button>
      </div>
      <div>
      <button name="+" onClick={handleOnClick} className='border-2 active:scale-90 shadow-inner shadow-orange-800 hover:border-red-700 border-gray-900 w-14 h-14 rounded-xl  bg-black'>+</button>
      </div>
      </div>
      <div className='flex space-x-3 md:space-x-5 md:pl-5 md:pr-5 pl-3 pr-3 p-3 text-white text-2xl '>
      <div>
        <button name="00" onClick={handleOnClick} className='border-2 active:scale-90 shadow-inner shadow-orange-800 hover:border-gray-500 border-gray-900 w-14 h-14 rounded-xl  bg-black'>00</button>
      </div>
      <div>
      <button name="0" onClick={handleOnClick} className='border-2 active:scale-90 shadow-inner shadow-orange-800 hover:border-gray-500 border-gray-900 w-14 h-14 rounded-xl  bg-black'>0</button>
      </div>
      <div>
      <button name="." onClick={handleOnClick} className='border-2 active:scale-90 shadow-inner shadow-orange-800 border-gray-900 hover:border-gray-500  w-14 h-14 rounded-xl  bg-black'>.</button>
      </div>
      <div>
      <button name="=" onClick={calc} className='border-2 active:scale-90 shadow-inner shadow-orange-800 hover:border-red-700 border-gray-900 w-14 h-14 rounded-xl active:border-green-700 bg-black'>=</button>
      </div>
      </div>
      
    </div>
    </div>
    </div>

  </>
  );
}

export default App;
