import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./features/Header";
import Footer from "./features/Footer";
import Home from "./routes/Home";
import Answer from "./routes/Answer";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/answer' element={<Answer />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
