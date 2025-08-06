import React from 'react'
import './App.css'
import Header from './comp/Header.jsx'
import Body from './comp/Body.jsx'
import Footer from './comp/Footer.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Body />
      </div>
      <Footer />
    </div>
  )
}

export default App
