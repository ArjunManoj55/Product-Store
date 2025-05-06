import NavBar from "./components/NavBar";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage"
import './App.css'
import { Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element= {<HomePage />} />
        <Route path="/create" element= {<CreatePage />} />
      </Routes>
    </>
  )
}

export default App
