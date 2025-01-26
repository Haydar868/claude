import React from 'react'
import { AppRouter } from './routes/App.Router'
import Navbar from './components/Navbar/Navbar'
const App = () => {
  return (
    <div className='max-w-[430px] min-h-[100vh] m-auto'>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}

export default App
