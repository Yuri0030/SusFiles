import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
// import Game from './pages/Game';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Game" element={<Game />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App