import React from "react";

import '../styles/modal.css'
import '../styles/projects.css'

import exterieurJury from '../assets/studioA/Exterieur Jury.jpg'
import axonometrieGevel from '../assets/studioA/axonometrie gevel.jpg'
import interieur from '../assets/studioA/Interieur.jpg'
import logo from '../assets/studioA/Logo.jpg'
import snede from '../assets/studioA/Studio_A_Robbe_Michiels_Jury_2020_12_16 2.jpg'
import niveau3 from '../assets/studioA/niveau3.jpg'
import oudePlannen from '../assets/studioA/oude plannen.jpg'
import detailStudio from '../assets/studioA/detail studio.jpg'

export default function StudioADisplay(open:boolean, setModalToClose:Function, isDutch:boolean) {
    return <div className={open? "modalBackground": "hidden"} >
        <div className="modal">
            <span onClick={() => setModalToClose(false)}>X</span>
            <div className="modalGrid">
                <div className="aspect-ratio-1 titleSquare projectDescription">
                    <h1>Studio A</h1>
                    <img src={interieur} alt="" className="backgroudTextStudioA height_100"/>

                    <label >{(!isDutch)? "Desinged by:": "Ontworpen door:"}</label>
                    <h3>Robbe Michiels</h3>
                    <h3>{(!isDutch)? "Supervised by:": "Begeleid door:"}</h3>
                    <p>Ronald De Meyer, Arthur De Roover, Martijn Vyncke</p>

                    <h3 className="dissapearsWhenToSmall">{(!isDutch)? "Project description:": "Project omschrijving:"}</h3>
                    <p className="dissapearsWhenToSmall">{
                        (!isDutch)? 
                        "In this master studio, the assignment was to plan a detention house in the urban fabric of Ghent. I had chosen to renovate an old and partly protected malt house for this purpose. The challenge was to keep the different clusters, each with a different detention level, separate from each other while still allowing individual freedom to a controlled degree. In this project, I experienced the process of reconstructing a building from plans found in the city archive and on-site visits into a usable BIM model.":
                        "In deze master studio was de opdracht om in het stedelijk weefsel van Gent een detentie huis in te plannen. Ik had ervoor gekozen om hiervoor een oude en deels beschermde mouterij te renoveren. De uitdaging lag in de verschillende clusters met elks een verschillend detentie niveau van elkaar gescheiden te houden terwijl toch individule vrijheid in gecontrolleerde mate toe te staan. Met deze opdracht heb ik het process ervaren om van plannen uit het stads archief en site bezoeken, een gebouw te reconstrueren in een bruikbaar BIM model."
                    }</p>
                    <h4 className="dissapearsWhenToSmall">{(!isDutch)? "Used applications:": "Gebruikte tools:"}</h4>
                    <p className="dissapearsWhenToSmall">Revit, Photoshop, Indesign, Illustrator</p>

                    
                </div>

                <div className="aspect-ratio-1 flex_center">
                    <img src={snede} alt="perspectief snede" className="largeImageStudioA height_100" />
                </div>
                
                <div className="grid-span-2 imageList">
                    <ul className="grid-row-2"><p>
                        {
                            (!isDutch)? 
                            "A detention house is located on the step of reintegration of detainees, people live in smaller groups, more visitors are allowed to pass by, people are given more privacy and depending on the level of security, they are allowed to leave the detention house during the day. In this design, I anticipated the rather complex circulation issue together with a private outdoor space in the side walls of the building, against which previously rundown and unprotected buildings stood.": 
                            "Een detentie huis bevindt zich op de stap van reïntegratie van gedetineerden, men leeft in kleineregroepen, er mag meer boezoek langs komen, men krijgt meer privacy en naargelang het veiligeids niveau, mag men overdag het detentiehuis verlaten. In dit ontwerp had ik de tamelijk complexe circulatie kwestie samen met een private buitenruimte voorzien in de zijgevels van het gebouw, waar er voorheen verloederde en niet beschermde bijgebouwen tegen stonden."
                        }
                    </p></ul>
                    
                    <ul className="grid-span-2 grid-row-2"><img src={interieur} alt="intereur beeld" /></ul>
                    <ul ><img src={axonometrieGevel} alt="axonometrie gevel" /></ul>
                    <ul><img src={oudePlannen} alt="plannen uit het archief" /></ul>
                    <ul><img src={exterieurJury} alt="exterieur beeld" /></ul>
                    <ul className="grid-span-2 grid-row-2"><img src={niveau3} alt="plannen nieveau 3" /></ul>
                    <ul ><img src={detailStudio} alt="detail tekening studio" /></ul>
                    <ul><img src={logo} alt="silhouette detentie huis" /></ul>
                </div>
            </div>
        </div>
    </div>
}