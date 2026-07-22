import campCampLogo from '/campcamplogo.png'
import ColorGradShader from './Shader'
import Schedule from './blocks/Schedule'
import FAQ from './blocks/FAQ'

// import './App.css'

function App() {

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="">
          <div className="hero relative">
            <ColorGradShader />
            <span className="border hero-border rounded-[50%] top-0 left-0"></span>
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
            <Schedule />
          </div>

          <div className="border-x-2 border-b-2 w-full p-6 text-2xl">
            <FAQ />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
