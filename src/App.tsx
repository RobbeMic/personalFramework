import { useEffect, useState } from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { HiAtSymbol } from 'react-icons/hi2'

import './App.css'
import './styles/modal.css'

import NavBar from './components/navbar'

import ProjectDisplay from './components/projectDisplay'

import pf from './assets/profilePic.jpg'
import DensityAndDesireLandscape from "./assets/tekening tuin met mensen.png"
import studioALogo from './assets/studioALogo.png'

function App() {
  const gottenLang = window.location.search
  const [isDutch, setIsDutch] = useState<boolean>(false)
  const [showStudioA, setShowStudioA] = useState<boolean>(false)

  useEffect(() => {
    if (gottenLang === "?nl") {
      setIsDutch(true)
    }
  }, [])

  return (
    
    <div className='viewport'>
      {ProjectDisplay(showStudioA, setShowStudioA)}
      <div className='languageSwitch'>
        <p onClick={() => setIsDutch(!isDutch)}>nl | en</p>
      </div>
      
      <NavBar/>
      <div className='contentContainer'>
        <section className='greetingSection'>
          <img src={pf} alt="profile picture" className='shapedBorder1 profilePicture'/>
          <div className='greetingTitle'>
            <div>
              <h1>Hi,</h1> 
              <h1>I'm Robbe</h1>
              <h3>{(!isDutch)? "Masters-student in architecture & civil engineering" : "Master student ingenieur-architect"}</h3>
              <p className='callToAction'>Contact me!</p>
            </div>
          </div>
          <div className="backGroundImageSectionContainer"><img src={DensityAndDesireLandscape} alt="backround image" className="backGroundImageSection" /></div>
          <div className="colorBlockFade"/>
        </section>

        <div className='colouredBackground'></div>

        <section className='verticalFlex'>
          <h1>project</h1>
          <p>small section</p>
        </section>
        
        <section className='project reverseRow'>
          <div className='textHolder'>
            <h1>Studio A</h1>
            <p>{
              (!isDutch)? 
              "Design for a detention residence, in this project I renovated an old malt house into small scale detention situated in a residential area.":
              "Ontwerp voor een detentie huis, ondergebracht in een gerenoveerde mouterij midden in een bestaand bouwblok."
            }</p>
          </div>

          <div className='imageHolder'>
            <img src={studioALogo} alt="*studio A*" />
          </div>
        </section>
        
        <section className='project'>
          <div className='textHolder' onClick={() => {setShowStudioA(true)}}>
            <h1>Studio A</h1>
            <p>{
              (!isDutch)? 
              "Design for a detention residence, in this project I renovated an old malt house into small scale detention situated in a residential area.":
              "Ontwerp voor een detentie huis, ondergebracht in een gerenoveerde mouterij midden in een bestaand bouwblok."
            }</p>
          </div>

          <div className='imageHolder'>
            <img src={studioALogo} alt="*studio A*" />
          </div>
        </section>

        <section>
          <div className='mainCallToAction'>
            <h1>{(!isDutch)? "Let's work together!": "Waar kun je mij bereiken?"}</h1>
            <div>
              <AiOutlineLinkedin/>
              <HiAtSymbol/>
            </div>
          </div>
          
        </section>

      </div>
    </div>
    
  )
}

export default App
