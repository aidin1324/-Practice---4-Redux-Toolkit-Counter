import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store/counterSlice'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState(0)

  const handleAddCustomValue = () => {
    dispatch(incrementByAmount(Number(inputValue) || 0))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-extrabold text-center text-indigo-800 mb-6">
          Redux Toolkit Counter
        </h1>
        
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 text-center shadow-inner mb-6">
          <h2 className="text-6xl font-bold text-indigo-900">{count}</h2>
          <p className="text-indigo-600 mt-2 uppercase tracking-wider">Current Value</p>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-6">
          <button 
            onClick={() => dispatch(increment())}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition"
          >
            +1
          </button>
          <button 
            onClick={() => dispatch(decrement())}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition"
          >
            -1
          </button>
          <button 
            onClick={() => dispatch(incrementByAmount(3))}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition"
          >
            +3
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <input 
            type="number" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a number"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button 
            onClick={handleAddCustomValue}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition"
          >
            Add Value
          </button>
        </div>
      </div>
    </div>
  )
}

export default App