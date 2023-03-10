import { useEffect, useState } from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { HiAtSymbol, HiOutlineBuildingLibrary, HiChevronDown, HiChevronUp } from 'react-icons/hi2'
import { BsBuildingGear, BsWindow } from 'react-icons/bs'

import '../App.css'
import '../styles/modal.css'
import '../styles/animate.css'

import NavBar from '../components/navbar'

import ProjectDisplay from '../components/projectDisplay'
import StudioADisplay from '../components/studioADisplay'
import KapelDisplay from '../components/kapelDisplay'
import DensityDisplay from '../components/densityDisplay'
import ThesisDisplay from '../components/thesisDisplay'
import ScoutsDisplay from '../components/scoutsDisplay'

import pf from '../assets/profilePic.jpg'
import DensityAndDesireLandscape from "../assets/tekening tuin met mensen.png"
import studioALogo from '../assets/studioALogo.png'
import densityLogo from '../assets/DensityLogo.png'
import kapelLogo from '../assets/KapelLogo.png'
import scoutsLogo from '../assets/scouts/kamp21constructie1.jpg'
import thesisLogo from '../assets/thesis logo.png'
import thesisLogoAlt from '../assets/thesis logo alt.png'

import cv_robbe_eng from '../assets/cv_robbe_eng.pdf'
import cv_robbe_nl from '../assets/cv_robbe_nl.pdf'


function FinalMainPage() {
  const gottenLang = window.location.search
  const [isDutch, setIsDutch] = useState<boolean>(false)
  const [showStudioA, setShowStudioA] = useState<boolean>(false)
  const [showKapel, setShowKapel] = useState<boolean>(false)
  const [showDensity, setShowDensity] = useState<boolean>(false)
  const [showThesis, setShowThesis] = useState<boolean>(false)
  const [showScouts, setShowScouts] = useState<boolean>(false)

  function toggleLanguage() {
    if(isDutch) {
      window.history.replaceState(undefined, document.title, "/personalPortfolio/")
    }

    if(!isDutch) {
      window.history.replaceState(undefined, document.title, "/personalPortfolio/?nl")
    }

    setIsDutch(!isDutch)
  }

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
  }, { rootMargin: "-25%" })

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

  function copyToClipboard(event:React.MouseEvent, url:string) {
    event.preventDefault()

    navigator.clipboard.writeText(url)

    alert(`Copied "${url}" to your clipboard!`)
  }

  function openInNewTab (event:React.MouseEvent, url:string) {
      event.preventDefault()

      window.open(url, '_blank')
  }

function scrollToAction (event:React.MouseEvent) {
  event.preventDefault()
  const container = document.querySelector('.contentContainer')
  if(!container) {console.log('no container found'); return}
  const mainCallToAction = container.querySelector('.mainCallToAction')
  
  if(!mainCallToAction) {console.log('no action found'); return}
  console.log(mainCallToAction)
  const containerHeight = container.scrollHeight
  const elementHeight = mainCallToAction.scrollHeight

  const position = (containerHeight - 1.5*elementHeight)

  console.log('scrolling to ' + position)

  container.scrollTo(0, position)
}

function scrollDown (event:React.MouseEvent) {
  event.preventDefault()

  const container = document.querySelector('.contentContainer')
  if(!container) {console.log('no container found'); return}

  const greetingSection = container.querySelector('.greetingSection')
  if(!greetingSection) {console.log('no greeting section found'); return}

  const heigt = greetingSection.scrollHeight

  container.scrollTo(0, heigt)
}

function scrollUp (event:React.MouseEvent) {
  event.preventDefault()

  const container = document.querySelector('.contentContainer')
  if(!container) {console.log('no container found'); return}

  container.scrollTo(0, 0)
}

  // document.addEventListener("backbutton", () => {
  //   if (showDensity) {setShowDensity(false); return}

  //   if(showKapel) {setShowKapel(false); return}

  //   if(showStudioA) {setShowStudioA(false); return}

  //   if(showThesis) {setShowThesis(false); return}

  //   if(showScouts) {setShowScouts(false); return}
  // })
  // this didn't work...

  useEffect(() => {
    if (gottenLang === "?nl") {
      setIsDutch(true)
    }
  }, [])

  return (
    
    <div className='viewport'>
      {/* {ProjectDisplay(showStudioA, setShowStudioA)} */}
      {StudioADisplay(showStudioA, setShowStudioA, isDutch)}
      {KapelDisplay(showKapel, setShowKapel, isDutch)}
      {DensityDisplay(showDensity, setShowDensity, isDutch)}
      {ThesisDisplay(showThesis, setShowThesis, isDutch)}
      {ScoutsDisplay(showScouts, setShowScouts, isDutch)}
      <div className='scrollPreventer'/>

      <div className='languageSwitch' onClick={() => toggleLanguage()}>
        <p>nl | en</p>
      </div>

      <div className='banner'/>

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
            <p className='callToAction appearAfterAnimation' onClick={(event) => scrollToAction(event)}>{(!isDutch)? "Contact me!": "Contacteer mij!"}</p>
          </div>
        </div>

        <div className='scrollInvitation hoverUpDown' onClick={(event) => scrollDown(event)}><HiChevronDown/></div>
        
        <img src={pf} alt="profile picture" className='shapedBorder1 profilePicture'/>

        <section className='greetingSection'>
          <div className="backGroundImageSectionContainer"><img src={DensityAndDesireLandscape} alt="backround image" className="backGroundImageSection" /></div>
          <div className="colorBlockFade"/>
        </section>

        
        <div className='chapterTitle'>
          <h1 className='fitContent scale0_8 secondObserve transition200ms'>
            {
              (!isDutch)?
              "My interests":
              "Mijn intresses"
            }
          </h1>
        </div>

        <section className='interestsSection'>
          <div className='scale0_8 secondObserve transition200ms'>
            <h2><span><HiOutlineBuildingLibrary/></span>{(!isDutch)? " Renovations": " Renovaties"}</h2>
            <p>
              {
                (!isDutch)?
                "Old buildings, along with all their imperfections and contradictions, intrigue me. I like to go out and recreate the structure and layered logic from observations and then get to work on this.":
                "Oude gebouwen, samen met al hun imperfecties en tegenstrijdigheden, intrigeren mij. Ik ga er graag op uit om vanuit observaties de structuur en gelaagde logica te reconstrueren om hier dan vervolgens mee aan de slag te gaan."
              }
            </p>
          </div>

          <div className='scale0_8 secondObserve transition200ms'>
            <h2><span><BsBuildingGear/></span> BIM</h2>
            <p>
              {
                (!isDutch)?
                "Throughout my studies, I have specialised in digitalisation techniques and their automation. Small repetitive tasks aren't really my thing, I would much rather spend more time automating them and doing them much faster in the future.":
                "Doorheen mijn studies specialiseerde ik mij in digitalisatie technieken en de automatisatie ervan. Kleine repetitieve taken daar heb ik het niet zo voor, ik investeer liever tijd om deze te automatiseren en ze in de toekomst veel sneller te doen."
              }
            </p>
          </div>

          <div className='scale0_8 secondObserve transition200ms'>
            <h2><span><BsWindow/></span> web-design</h2>
            <p>
              {
                (!isDutch)?
                "I have designed websites both on a professional level and as a hobby, where the technical aspect was challenging and the user experience stood central. This website, for instance, was happily written entirely by myself.":
                "Ik heb op zowel professioneel als op hobby niveau websites ontworpen waarbij het technische aspect uitdagend was én de gebruikerservaring centraal stond. Deze website is bijvoorbeeld met veel plezier volledig door mezelf geschreven."
              }
            </p>
          </div>
        </section>
        

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
              "Design for a detention residence. In this project I renovated an old malt house into small scale detention situated in a residential area.":
              "Ontwerp voor een detentie huis, ondergebracht in een gerenoveerde mouterij midden in een bestaand bouwblok."
            }</p>
          </div>

          <div className='imageHolder observe translateY200 transition400ms'>
            <img src={studioALogo} alt="*studio A*" className='easeInOut' onClick={() => {setShowStudioA(true)}} />
          </div>
        </section>
        
        <section className='project'>
          <div className='textHolder' onClick={() => {setShowKapel(true)}}>
            <h1 className='secondObserve translateY200 transition800ms' >
              {
                (!isDutch)?
                "Saint-Amandus Chapel":
                "Sint-Amanduskapel"
              }
            </h1>
            <p className='secondObserve translateY100 transition800ms' >{
              (!isDutch)? 
              "Restorative study for an old chapel in the centre of Ghent. Research into the damage patterns, developed into a renovation proposal.":
              "Restauratieve studie voor een oude kapel in het centrum van Gent. Onderzoek naar de schade fenomenen, uitgewerkt tot een renovatie voorstel."
            }</p>
          </div>

          <div className='imageHolder verticalImage observe translateY200 transition400ms'>
            <img src={kapelLogo} alt="*sint-amanduskapel voordeur*" className='easeInOut flipVertically' onClick={() => {setShowKapel(true)}} />
          </div>
        </section>

        <section className='project reverseRow'>
          <div className='textHolder' onClick={() => {setShowDensity(true)}}>
            <h1 className='secondObserve translateY200 transition800ms'>"Density and Desire"</h1>
            <p className='secondObserve translateY100 transition800ms'>{
              (!isDutch)? 
              "Design for collective housing with 19 flexible living units. Sketch-based investigation of a higher density in the outskirts of Ghent and an exploration in technical detailing.":
              "Ontwerp voor een collectieve woning met 19 flexibele woon-eenheden. Schetsmatig onderzoek naar een hogere densiteit in de Gentse stadsrand en een exploratie in technische detaillering."
            }</p>
          </div>

          <div className='imageHolder observe translateY200 transition400ms'>
            <img src={densityLogo} alt="*Density and Desire*" className='easeInOut flipVertically' onClick={() => {setShowDensity(true)}} />
          </div>
        </section>

        <section className='project'>
          <div className='textHolder' onClick={() => {setShowThesis(true)}}>
            <h1 className='secondObserve translateY200 transition800ms'>
              {
                (!isDutch)?
                "BIM in Renovations":
                "BIM in Renovaties"
              }
            </h1>
            <p className='secondObserve translateY100 transition800ms'>{
              (!isDutch)? 
              "I'm currently working on my master thesis in which I research opportunities and challenges of applying BIM concepts in renovation projects. Specifically the challenge of first getting information out of the existing building into a BIM model before any 3D models are made.":
              "Ik rond momenteel mijn master thesis af, waarin ik onderzoek voer naar de mogelijkheden en uitdagingen om BIM concepten toe te passen in renovatie projecten. Specifieker gaat mijn onderzoek over informatie van een bestaand gebouw in een BIM model te krijgen alvorens een 3D model is opgesteld."
            }</p>
          </div>

          <div className='imageHolder observe translateY200 transition400ms'>
            <img src={thesisLogo} alt="*studio A*" className='easeInOut flipVertically' onClick={() => {setShowThesis(true)}} />
          </div>
        </section>

        <div className='linebreak extraMarginBottom'/>

        <section className='project reverseRow'>
          <div className='textHolder' onClick={() => {setShowScouts(true)}}>
            <h1 className='secondObserve translateY200 transition800ms'>{
              (!isDutch)?
              "Scouts leader":
              "Scouts leider"
              }</h1>
            <p className='secondObserve translateY100 transition800ms'>{
              (!isDutch)? 
              "I have been a scouts leader for 7 years. I have been in charge of multiple groups of teenagers and young adults, acting as team leader or as instructor. As an instructor my main experience is to train experienced scouts leaders into competent team leaders.":
              "Ik ben reeds 7 jaar scouts leider. Hierbij heb ik voor meerdere groepen pubers en jong volwassenen gestaan, als team leider en als instructeur. Mijn ervaring als instructeur is vooral om ervaren scoutsleiders op te leiden tot uit de kluiten gewassen teamleiders."
            }</p>
          </div>

          <div className='imageHolder observe translateY200 transition400ms'>
            <div className='imageContainerSquare shapedBorder2 strict easeInOut' onClick={() => {setShowScouts(true)}}>
              <img src={scoutsLogo} alt="*scoutskamp*" className='easeInOut' />
            </div>
          </div>
        </section>

        <section className='centerItems extraMarginTop observe translateY200 transition400ms'>
          <div className='mainCallToAction '>
            <h1><span>{(!isDutch)? "": 'Goesting'}</span>{(!isDutch)? "Let's work together!": ' om samen te werken?'}</h1>
            <div>
              <div onClick={(event) => {openInNewTab(event, 'https://www.linkedin.com/in/robbe-michiels-056956252/')}}>
                <AiOutlineLinkedin className='icon'/>
                <label>Robbe Michiels</label>
              </div>

              <div onClick={(event) => {copyToClipboard(event, 'robbe.mic@gmail.com')}}>
                <HiAtSymbol className='icon'/>
                <label>robbe.mic@gmail.com</label>
              </div>

              <div>
                <a 
                  key={"cv"}
                  title="download cv"
                  href={(!isDutch)? cv_robbe_eng: cv_robbe_nl}
                  download="CV_Robbe_Michiels"
                >{(!isDutch)? "Download my CV": "Download mijn CV"}</a>
              </div>
            </div>
          </div>
          
          <div className='scrollUp' onClick={(event) => scrollUp(event)}><HiChevronUp/></div>
        </section>
        
        
      </div>
    </div>
    
  )
}

export default FinalMainPage
