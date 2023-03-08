import { useEffect, useState } from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { HiAtSymbol } from 'react-icons/hi2'

import '../App.css'
import '../styles/modal.css'
import '../styles/animate.css'

import NavBar from '../components/navbar'

import ProjectDisplay from '../components/projectDisplay'

import pf from '../assets/profilePic.jpg'
import DensityAndDesireLandscape from "../assets/tekening tuin met mensen.png"
import studioALogo from '../assets/studioALogo.png'
import densityLogo from '../assets/DensityLogo.png'
import kapelLogo from '../assets/KapelLogo.png'
import scoutsLogo from '../assets/scouts/kamp21constructie1.jpg'

function Test() {
  const gottenLang = window.location.search
  const [isDutch, setIsDutch] = useState<boolean>(false)
  const [showStudioA, setShowStudioA] = useState<boolean>(false)

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            entry.target.classList.toggle("show", entry.isIntersecting)
            observer.unobserve(entry.target)
          }
        })
    }, { rootMargin: "-50px" })

    const secondObserver = new IntersectionObserver((entries, observer) => {
      // console.log(entries)
      entries.forEach(entry => {
          if(entry.isIntersecting) {
            entry.target.classList.toggle("show", entry.isIntersecting)
            observer.unobserve(entry.target)
          }
      })
  }, { rootMargin: "-200px" })

  async function observe() {
    let observedObjects = document.querySelectorAll(".observe")
    if(observedObjects.length > 0) {
        observedObjects.forEach(object => {
            observer.observe(object)
        })
    } else {console.log("nothing observed")}
  }

  function observe2() {
    let observedObjects2 = document.querySelectorAll(".secondObserve")
    if(observedObjects2.length > 0) {
        observedObjects2.forEach(object => {
          secondObserver.observe(object)
        })
    } else {console.log("nothing observed")}
  }

    

  useEffect(() => {
    if (gottenLang === "?nl") {
      setIsDutch(true)
    }
  }, [])

  return (
    
    <div className='viewport'>
      {ProjectDisplay(showStudioA, setShowStudioA)}
      <div className='scrollPreventer'/>

      <div className='languageSwitch'>
        <p onClick={() => setIsDutch(!isDutch)}>nl | en</p>
      </div>

      

      {NavBar(isDutch)}
      <div className='contentContainer' onScroll={() => {observe(); observe2()}}>

        <div className='blackScreen animateUp' />

        <div className='colouredBackground'></div>
        
        <div className='greetingTitle'>
          <div>
            <h1 className='popUp'>
              {
                (!isDutch)?
                "Hi,":
                "Hey,"
              }
            </h1> 
            <h1 className='popUpDelay'>
              {
                (!isDutch)?
                "I'm Robbe":
                "Ik ben Robbe"
              }
            </h1>
            <h3 className='appearAfterAnimation'>{(!isDutch)? "Masters-student in architecture & civil engineering" : "Master student ingenieur-architect"}</h3>
            <p className='callToAction appearAfterAnimation'>Contact me!</p>
          </div>
        </div>
        
        <img src={pf} alt="profile picture" className='shapedBorder1 profilePicture'/>

        <section className='greetingSection'>
          <div className="backGroundImageSectionContainer"><img src={DensityAndDesireLandscape} alt="backround image" className="backGroundImageSection" /></div>
          <div className="colorBlockFade"/>
        </section>

        
        <div className='chapterTitle'>
          <h1 className='fitContent scale0_8 observe transition200ms'>
            {
              (!isDutch)?
              "My interests":
              "Mijn intresses"
            }
          </h1>
          {/* <h3 className='scale0_5 observe transition200ms'>
            {
              (!isDutch)?
              "a selection of projects I have done throughout my studies":
              "een selectie van enkele projecten die ik doorheen mijn studies heb gemaakt"
            }
          </h3> */}
        </div>
        

        <div className='chapterTitle'>
          <h1 className='scale0_8 observe transition200ms'>
            {
              (!isDutch)?
              "Projects":
              "Projecten"
            }
          </h1>
          <h3 className='scale0_5 observe transition200ms'>
            {
              (!isDutch)?
              "a selection of projects I have done throughout my studies":
              "een selectie van enkele projecten die ik doorheen mijn studies heb gemaakt"
            }
          </h3>
        </div>

        

        <section className='project reverseRow'>
          <div className='textHolder' onClick={() => {setShowStudioA(true)}}>
            <h1 className='secondObserve translateY200 transition800ms' >"Studio A"</h1>
            <p className='secondObserve translateY100 transition800ms' >{
              (!isDutch)? 
              "Design for a detention residence, in this project I renovated an old malt house into small scale detention situated in a residential area.":
              "Ontwerp voor een detentie huis, ondergebracht in een gerenoveerde mouterij midden in een bestaand bouwblok."
            }</p>
          </div>

          <div className='imageHolder observe translateY200 transition400ms'>
            <img src={studioALogo} alt="*studio A*" className='easeInOut' onClick={() => {setShowStudioA(true)}} />
          </div>
        </section>
        
        <section className='project'>
          <div className='textHolder' onClick={() => {setShowStudioA(true)}}>
            <h1 className='secondObserve translateY200 transition800ms' >
              {
                (!isDutch)?
                "Saint-Amandus chapel":
                "Sint-Amanduskapel"
              }
            </h1>
            <p className='secondObserve translateY100 transition800ms' >{
              (!isDutch)? 
              "Restorative study for an old chapel in the centre of Ghent. Research into the damage patters, developed into a renovation proposal.":
              "Restauratieve studie voor een oude kapel in het centrum van Gent. Onderzoek naar de schade fenomenen, uitgewerkt tot een renovatie voorstel."
            }</p>
          </div>

          <div className='imageHolder verticalImage observe translateY200 transition400ms'>
            <img src={kapelLogo} alt="*sint-amanduskapel voordeur*" className='easeInOut flipVertically' />
          </div>
        </section>

        <section className='project reverseRow'>
          <div className='textHolder' onClick={() => {console.log("desity and desire")}}>
            <h1 className='secondObserve translateY200 transition800ms'>"Density and Desire"</h1>
            <p className='secondObserve translateY100 transition800ms'>{
              (!isDutch)? 
              "Design for a detention residence, in this project I renovated an old malt house into small scale detention situated in a residential area.":
              "Ontwerp voor een detentie huis, ondergebracht in een gerenoveerde mouterij midden in een bestaand bouwblok."
            }</p>
          </div>

          <div className='imageHolder observe translateY200 transition400ms'>
            <img src={densityLogo} alt="*Density and Desire*" className='easeInOut flipVertically' />
          </div>
        </section>

        <section className='project'>
          <div className='textHolder' onClick={() => {console.log("bim in renovations")}}>
            <h1 className='secondObserve translateY200 transition800ms'>
              {
                (!isDutch)?
                "(WIP) BIM in Renovations":
                "(WIP) BIM in Renovaties"
              }
            </h1>
            <p className='secondObserve translateY100 transition800ms'>{
              (!isDutch)? 
              "I'm currently working on my master thesis in which I research opportunities and challenges of applying BIM concepts in renovation projects. Specifically the challenge of first getting information out of the existing building into a BIM model before any 3d models are made.":
              "Ik ben momenteel bezig met mijn master thesis, waarin ik onderzoek voer naar de mogelijkheden en uitdagingen om BIM concepten toe te passen in renovatie projecten. Specifieker gaat mijn onderzoek over informatie over het bestaande gebouw in een BIM model krijgen alvorens een 3d model is opgesteld."
            }</p>
          </div>

          <div className='imageHolder observe translateY200 transition400ms'>
            <img src={studioALogo} alt="*studio A*" className='easeInOut' />
          </div>
        </section>

        <div className='linebreak extraMarginBottom'/>

        <section className='project reverseRow'>
          <div className='textHolder' onClick={() => {console.log('display scouts carrier')}}>
            <h1 className='secondObserve translateY200 transition800ms'>{
              (!isDutch)?
              "Scouts leader":
              "Scouts leider"
              }</h1>
            <p className='secondObserve translateY100 transition800ms'>{
              (!isDutch)? 
              "I have been a scouts leader for 7 years. I have been in charge of multiple groups of adolescents and young adults, acting as both team leader or instructor. As an instructor my main experience is to train experienced scouts leaders as competent team leaders.":
              "Ik ben 7 jaar lang scouts leider geweest. Hierbij heb ik voor meerdere groepen pubers en jong volwassenen gestaan, zowel als team leider en als instructeur. Mijn ervaring als instructeur is vooral om ervaren scoutsleiders op te leiden tot uit de kluiten gewassen teamleiders"
            }</p>
          </div>

          <div className='imageHolder observe translateY200 transition400ms'>
            <div className='imageContainerSquare shapedBorder2 strict'>
              <img src={scoutsLogo} alt="*scoutskamp*" className='easeInOut' />
            </div>
          </div>
        </section>

        <section className='centerItems extraMarginTop observe translateY200 transition400ms'>
          <div className='mainCallToAction '>
            <h1>{(!isDutch)? "Let's work together!": 'Goesting om samen te werken?'}</h1>
            <div>
              <div>
                <AiOutlineLinkedin className='icon'/>
                <label>LinkedIn</label>
              </div>

              <div>
                <HiAtSymbol className='icon'/>
                <label>email</label>
              </div>

              <div>
                <p>{(!isDutch)? "Download my CV": "Download mijn CV"}</p>
              </div>
            </div>
          </div>
          
        </section>

      </div>
    </div>
    
  )
}

export default Test
