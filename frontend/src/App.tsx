import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./features/Header";
import Footer from "./features/Footer";
//import QuestionText from './features/QuestionText';
import Home from "./routes/Home";
import Question from "./routes/Question";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/question' element={<Question />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
