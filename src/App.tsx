import { useState } from 'react'
import heroImg from '/assets/shader1.jpg'
import campCampLogo from '/campcamplogo.png'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div>
          <div className="hero relative">
            <img src={heroImg} className="circle-mask " alt="A gooey groovy swirl" />
            <span className="border hero-border rounded-[50%] top-0 left-0 md:top-1 md:left-1"></span>
            <img src={campCampLogo} className="camp-camp-logo" alt="CAMP CAMP" />
          </div>

        </div>

        <div className="border max-w-md">
          <h1 className=""> Camp Camp </h1>
          <p className="text-6xl"> a celebration of art, music, and camp</p>
        </div>
        <div className="border">
          <p>September 10 - 13</p>
          <p>Thurs - Sun</p>
          <br />
          <p>Camp Gregory</p>
          <p>Aurora, NY</p>
        </div>

        <div className="border">
          Schedule
        </div>
        <div className="border">
          Map
        </div>
        <div className="border">
          FAQs
        </div>

      </div>
    </>
  )
}

export default App
