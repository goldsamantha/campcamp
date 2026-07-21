import campCampLogo from '/campcamplogo.png'
import heroImg from '/assets/shader1.jpg'
import ColorGradShader from './Shader'

// import './App.css'

function App() {

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="p-12">
          <ColorGradShader />
        <div className="hero relative">
            <img src={heroImg} className="circle-mask " alt="A gooey groovy swirl" />
            <span className="border hero-border rounded-[50%] top-0 left-0"></span>
            <img src={campCampLogo} className="camp-camp-logo" alt="CAMP CAMP" />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
