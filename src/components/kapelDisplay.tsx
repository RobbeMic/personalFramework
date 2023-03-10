import React from "react";

import '../styles/modal.css'
import '../styles/projects.css'

import beeldInkom from '../assets/kapel/Beeld inkom.png'
import alex1 from '../assets/kapel/Enscape_2021-12-06-20-43-04.png'
import alex2 from '../assets/kapel/Enscape_2021-12-06-20-48-01.png'
import alex3 from '../assets/kapel/Enscape_2021-12-06-20-52-24.png'
import programma1 from '../assets/kapel/Programma 1.jpg'
import waardeBepaling from '../assets/kapel/Waardebepaling plan 3.jpg'
import schade1 from '../assets/kapel/schade1.jpg'
import schade2 from '../assets/kapel/schade2.jpg'
import voordeur from '../assets/kapel/unnamed.png'
import altaar from '../assets/kapel/unnamed (5).png'

export default function KapelDisplay(open:boolean, setModalToClose:Function, isDutch:boolean) {
    return <div className={open? "modalBackground": "hidden"} >
        <div className="modal">
            <span onClick={() => setModalToClose(false)}>X</span>
            <div className="modalGrid">
                <div className="aspect-ratio-1 titleSquare projectDescription">
                    <h1>{(!isDutch)? "Saint-Amandus Chapel": "Sint-Amanduskapel"}</h1>
                    <img src={alex3} alt="" className="backgroudTextStudioA height_100"/>

                    <label >{(!isDutch)? "Desinged by:": "Ontworpen door:"}</label>
                    <h3>Robbe Michiels, Alexander Vandaele, Gregor Sobolev, Maarten Lauwereys, Brent Paelinck</h3>
                    <label className="margin-bottom-0">{
                        (!isDutch)? 
                        "My responsibilities: pathological study, damage phenomena & remedies, design entrance hall": 
                        "Ik was verantwoordelijk voor: pathologische studie, schade fenomenen & remedies, ontwerp inkomhal"
                    }</label>

                    <h3>{(!isDutch)? "Supervised by:": "Begeleid door:"}</h3>
                    <p>Callebaut Architecten</p>

                    <h3 className="dissapearsWhenToSmall">{(!isDutch)? "Project description:": "Project omschrijving:"}</h3>
                    <p className="dissapearsWhenToSmall">{
                        (!isDutch)? 
                        "Located in the centre of Ghent, the Saint-Amandus Chapel of the former Alexian Monastery on Oude Houtlei. The assignment consisted of analysing the existing condition in group and drawing up a report based on this analysis, in preparation for a future restoration and repurposing.":
                        "De Sint-Amandus kapel bevindt zich in het centrum van Gent, het is de kapel van het voormalig Alexianenklooster op de Oude Houtlei. De opdracht bestond uit het in groep analyseren van de bestaande toestand en op basis van deze analyse een verslag op te maken, ter voorbereiding van een toekomstige restauratie en herbestemming."
                    }</p>
                    <h4 className="dissapearsWhenToSmall">{(!isDutch)? "Used applications:": "Gebruikte tools:"}</h4>
                    <p className="dissapearsWhenToSmall">Miro, Autocad, Rhino, Photoshop, Indesign, Enscape</p>

                    
                </div>

                <div className="aspect-ratio-1 flex_center">
                    <img src={schade1} alt="schadeplan 1" className="largeImageStudioA height_100" />
                </div>
                
                <div className="grid-span-2 imageList">
                    <ul><img src={beeldInkom} alt="beeld inkom" /></ul>
                    <ul className="grid-span-2 grid-row-2"><img src={programma1} alt="plannen nieveau 1" /></ul>
                    <ul><img src={alex1} alt="render Alexander Vandaele" /><label>{(!isDutch)? "Render by Alexander Vandaele": "Render door Alexander Vandaele"}</label></ul>
                    <ul className="grid-span-2 grid-row-2"><img src={schade2} alt="schadeplan 2" /></ul>
                    <ul className="grid-row-2"><img src={altaar} alt="foto interieur kapel" /></ul>
                    <ul><img src={voordeur} alt="foto voordeur" /></ul>
                    <ul><img src={waardeBepaling} alt="snede waarde bepaling" /></ul>
                    <ul><img src={alex2} alt="render Alexander Vandaele" /><label>{(!isDutch)? "Render by Alexander Vandaele": "Render door Alexander Vandaele"}</label></ul>
                </div>
            </div>
        </div>
    </div>
}