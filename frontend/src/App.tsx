import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./features/Header";
import Footer from "./features/Footer";
import Home from "./routes/Home";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
