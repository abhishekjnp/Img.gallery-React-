import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ImageGallery from './components/ImageGallery.jsx';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <div className="card">
      <ImageGallery />
      </div>
      
    </>
  )
}

export default App
