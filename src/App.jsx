import React, { useEffect, useState } from 'react'
import { AppRouter } from './routes/App.Router'
import Navbar from './components/Navbar/Navbar'
import BookLoader from './UI/BookLoader/BookLoader';
const App = () => {

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false); // 4 soniyadan keyin yuklanish sahifasini yopish
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
{
  showLoading ? <BookLoader/> :(
    <div className='max-w-[430px] min-h-[100vh] m-auto'>
    <Navbar/>
    <AppRouter/>
  </div>
  )
}
   
    </div>
  )
}

export default App
