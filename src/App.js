import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { AppProvider } from "./contexts/context.js"

import WelcomePage from "./components/WelcomePage.js"
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <AppProvider>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
          </Routes>
        </AppProvider>
      </Router>
    </div>
  )
}

export default App
