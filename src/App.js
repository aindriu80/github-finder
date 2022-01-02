import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import { GithubProvider } from './context/github/GithubContext'

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12"></main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/notfound" element={<NotFound />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  )
}

export default App
