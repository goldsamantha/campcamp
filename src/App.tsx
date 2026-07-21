import { useState } from 'react'
import heroImg from '/assets/shader1.jpg'
import campCampLogo from '/campcamplogo.png'
import Toggle from './Toggle'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="p-12">
          <div className="hero relative">
            <img src={heroImg} className="circle-mask " alt="A gooey groovy swirl" />
            <span className="border hero-border rounded-[50%] top-0 left-0 md:top-1 md:left-1"></span>
            <img src={campCampLogo} className="camp-camp-logo" alt="CAMP CAMP" />
          </div>

        </div>
        <div className="max-w-xl pt-8">
          <div className="border-2 w-full p-6">
            <p className="text-5xl"> a celebration of art, music, and camp</p>
          </div>
          <div className="border-x-2 border-b-2 w-full p-6 text-2xl">
            <p>September 10 - 13</p>
            <p>Thurs - Sun</p>
            <br />
            <p>Camp Gregory</p>
            <p>Aurora, NY</p>
          </div>

          <div className="border-x-2 border-b-2 w-full p-6 text-2xl">
            <Toggle title="Schedule">
              i am the schedule content
            </Toggle>
          </div>
          <div className="border-x-2 border-b-2 w-full p-6 text-2xl">
            <Toggle title="FAQs">
              i am the schedule content
            </Toggle>
          </div>
          <div className="border-x-2 border-b-2 w-full p-6 text-2xl">
            <Toggle title="Map">
              i am the schedule content
            </Toggle>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
