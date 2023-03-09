import React from "react";

import '../styles/modal.css'
import '../styles/projects.css'

import beeldGallerij from '../assets/density/Beeld gallerij 3.png'
import jury_detail_plan from '../assets/density/jury-detail-plan.jpg'
import snede1 from '../assets/density/jury-detailsnede-1.jpg'
import snede2 from '../assets/density/jury-detailsnede-2.jpg'
import niveau0 from '../assets/density/jury-niv-00-en-tuin.jpg'
import niveau2 from '../assets/density/jury-niv-02.jpg'
import maquette1 from '../assets/density/maquette1.jpg'
import maquette2 from '../assets/density/maquette2.jpg'
import maquette3 from '../assets/density/maquette3.jpg'
import gevelImpressie from '../assets/density/RobbeVictor gevelimpressie.jpg'
import tekeningTuin from '../assets/density/tekening tuin met mensen.png'
import tekeningSepia from '../assets/density/tekening tuin sepia.png'

export default function DensityDisplay(open:boolean, setModalToClose:Function, isDutch:boolean) {
    return <div className={open? "modalBackground": "hidden"} >
        <div className="modal">
            <span onClick={() => setModalToClose(false)}>X</span>
            <div className="modalGrid">
                <div className="aspect-ratio-1 titleSquare projectDescription">
                    <h1>Density and Desire</h1>
                    <img src={gevelImpressie} alt="" className="backgroudTextStudioA height_100"/>

                    <label >{(!isDutch)? "Desinged by:": "Ontworpen door:"}</label>
                    <h3>Robbe Michiels, Victor Vandenbossche</h3>
                    <h3>{(!isDutch)? "Supervised by:": "Begeleid door:"}</h3>
                    <p>Dirk De Meester, Trice Hofkens</p>

                    <h3>{(!isDutch)? "Project description:": "Project omschrijving:"}</h3>
                    <p>{
                        (!isDutch)? 
                        "In this assignment, the challenge was to organise some 19 housing units into collective housing. Victor and I had put maximum effort into the inclusion of different housing typologies within a rigid structure so that conversions would be possible over time. Furthermore, much attention was paid to increased contact with neighbours, a dynamic circulation large enough to serve as a small outdoor area provides space for these encounters.":
                        "In deze opdracht was het de uitdaging om een 19-tal wooneenheden te organiseren in een collectieve woning. Victor en Ik haddden maximaal ingezet op de inclusie van verschillende woning typologieën binnen een rigide structuur zodat verbouwingen op termijn mogelijk zijn. Verder is er veel aandacht gegaan naar het verhoogde contact met de buren, een dynamische circulatie die groot genoeg is om als kleine buitenruimte te dienen, voorziet plaats voor deze ontmoetingen."
                    }</p>
                    <h4>{(!isDutch)? "Used applications:": "Gebruikte tools:"}</h4>
                    <p>Autocad, Photoshop, Indesign, Rhino</p>

                    
                </div>

                <div className="aspect-ratio-1 flex_center">
                    <img src={snede2} alt="perspectief snede" className="largeImageStudioA height_100" />
                </div>
                
                <div className="grid-span-2 imageList">
                    <ul className="grid-row-2"><img src={niveau0} alt="plannen niveau 0" /></ul>
                    
                    <ul className="grid-span-2 grid-row-2"><img src={jury_detail_plan} alt="detail plan studios" /></ul>
                    <ul className="grid-span-2 grid-row-2"><img src={beeldGallerij} alt="beeld buitenruimte gallerij" /></ul>
                    <ul><img src={maquette3} alt="foto maquette" /></ul>
                    <ul><img src={gevelImpressie} alt="impressie beeld gevel" /></ul>
                    <ul><img src={snede1} alt="snede" /></ul>
                    
                    <ul><img src={maquette1} alt="foto maquette" /></ul>
                    <ul className="grid-row-2"><img src={niveau2} alt="plannen niveau 2" /></ul>
                    <ul><img src={maquette2} alt="foto maquette" /></ul>
                    <ul><img src={tekeningTuin} alt="tekening tuin" /></ul>
                </div>
            </div>
        </div>
    </div>
}