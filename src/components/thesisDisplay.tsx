import React from "react";

import '../styles/modal.css'
import '../styles/projects.css'

import frame1 from '../assets/thesis/frame1.jpg'
import frame2 from '../assets/thesis/frame2.jpg'
import frame3 from '../assets/thesis/frame3.jpg'
import frame4 from '../assets/thesis/frame4.jpg'
import frame5 from '../assets/thesis/frame5.jpg'
import renderModule1 from '../assets/thesis/project page renderer module open simple final.png'
import renderModule2 from '../assets/thesis/project page renderer module open final.png'
import projectListing from '../assets/thesis/project page render module open final.png'
import mifestoStore from '../assets/thesis/dashboard store final.png'

import thesispdf from '../assets/thesis/Robbe_Michiels_masterproef.pdf'

export default function ThesisDisplay(open:boolean, setModalToClose:Function, isDutch:boolean) {
    return <div className={open? "modalBackground": "hidden"} >
        <div className="modal">
            <span onClick={() => setModalToClose(false)}>X</span>
            <div className="modalGrid">
                <div className="aspect-ratio-1 titleSquare projectDescription">
                    <h1>{(!isDutch)? "BIM in Renovations": "BIM in Renovaties"}</h1>
                    <img src={renderModule1} alt="rendering module with modelled window" className="backgroudTextThesis height_100"/>

                    <label >{(!isDutch)? "Research by:": "Onderzoek door:"}</label>
                    <h3><span>Robbe Michiels</span></h3>
                    <h3>{(!isDutch)? "Supervised by:": "Begeleid door:"}</h3>
                    <p>Paulus Present (Bureau Bouwtechniek), Jeroen Werbrouck (UGent)</p>

                    <h3 className="dissapearsWhenToSmall">{(!isDutch)? "Project description:": "Project omschrijving:"}</h3>
                    <p className="dissapearsWhenToSmall">{
                        (!isDutch)? 
                        "During my master's thesis, I conducted research towards the opportunities and challenges of applying BIM concepts in renovation and restoration projects. Specifically, my research was about bringing the information obtained in the initial restorative survey into a BIM model before a 3d model is created. This makes it possible to survey a building first and only afterwards detail specific parts according to the needs of the renovation project.":
                        "In mijn master thesis heb ik onderzoek gevoerd naar de mogelijkheden en uitdagingen om BIM concepten toe te passen in renovatie en restauratie projecten. Specifieker ging mijn onderzoek over de informatie, die verkregen wordt in het initiële restauratieve onderzoek, in een BIM model te krijgen alvorens een 3D model op te stellen. Dit stelt de mogelijkheid om eerst een gebouw te onderzoeken en achteraf pas specifieke delen gedetailleerder uit te werken naargelang de noden van het renovatie project."
                    }</p>

                    
                </div>

                <div className="aspect-ratio-1 flex_center">
                    <img src={frame3} alt="micro front-end interactie" className="largeImageThesis height_100" />
                </div>
                
                <div className="grid-span-2 imageList">
                    <ul className="grid-row-2">
                        <p>
                            {
                                (!isDutch)?
                                "Usually, when we want to move to a BIM model, we would first go about fully modelling the environment. It is more in line with a traditional design process to build up the complexity of the model as the project progresses. However, usually BIM software does not allow adding information about objects without modelling them.":
                                "Meestal gaat men eerst de omgeving volledig na modelleren wanneer men wil overstappen op een BIM model. Het is meer in lijn met een traditioneel ontwerpproces om de complexiteit van het model op te bouwen naarmate het project vordert. Echter laat gebruikelijke BIM software vaak niet toe om informatie over objecten toe te voegen zonder dat dit object gemodelleerd is."
                            }
                        </p>
                        <p>{
                            (!isDutch)?
                            "In the development of the prototype, a lot of attention was paid to user experience. Although several frameworks already exist to implement specific aspects, such as damage or heritage, in an open-data manner into BIM environments, they often require in-depth technical digital knowledge. This is why I tried to provide an environment that can bundle these frameworks in the form of micro-applications and provide them without relying on previous technical knowledge.":
                            "Bij de uitwerking van het prototype ging er veel aandacht naar de ervaring van de gebruiker. Alhoewel er reeds meerdere kaders bestaan om specifieke aspecten, zoals schade of erfgoed, op een open-data manier te implementeren in BIM omgevingen, vereisen deze vaak een grondige technische digitale kennis. Hierom heb ik getracht om een omgeving te voorzien die deze kaders kan bundelen in de vorm van micro-applicaties en aan te rijken zonder dat er wordt uitgegaan van voorgaande technische kennis."    
                        }</p>
                        <p>
                            <a href={thesispdf} title="Robbe_Michiels_thesis" target="_blank" >
                                {(!isDutch)? "Read complete thesis": "Lees volledige thesis"}
                            </a>
                        </p>
                    </ul>

                    <ul className="grid-span-2"><img src={frame1} alt='"BIMification" process' /></ul>
                    
                    <ul className="grid-span-2 grid-row-2"><img src={frame2} alt="interaction schama" /></ul>

                    {/* <ul><img src={frame3} alt="" /></ul> */}

                    {/* <ul><img src={frame4} alt="store structure" /></ul> */}

                    <ul className="grid-span-3"><img src={projectListing} alt="BIM model without a 3D model" /></ul>

                    <ul className="grid-span-3"><img src={mifestoStore} alt="micro front-end store" /></ul>

                    <ul className="grid-span-3"><img src={renderModule1} alt="rendering module with modelled window" /></ul>

                    <ul className="grid-span-3"><img src={renderModule2} alt="rendering module with LOD100 building" /></ul>
                    
                </div>
            </div>
        </div>
    </div>
}