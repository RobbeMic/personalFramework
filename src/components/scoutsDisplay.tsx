import React from "react";

import '../styles/modal.css'
import '../styles/projects.css'

import herfst21wandel from '../assets/scouts/herfst21wandel.jpg'
import kamp20constructie from '../assets/scouts/kamp20constructie.jpg'
import kamp21constructie1 from '../assets/scouts/kamp21constructie1.jpg'
import kamp21constructie2 from '../assets/scouts/kamp21constructie2.jpg'
import kamp21leiding from '../assets/scouts/kamp21leiding.jpg'

export default function ScoutsDisplay(open:boolean, setModalToClose:Function, isDutch:boolean) {
    return <div className={open? "modalBackground": "hidden"} >
        <div className="modal">
            <span onClick={() => setModalToClose(false)}>X</span>
            <div className="modalGrid">
                <div className="aspect-ratio-1 titleSquare projectDescription">
                    <img src={kamp21leiding} alt="kamp21leiding" className="backgroudTextScouts height_100"/>

                    <h3>{(!isDutch)? "Experience as a scoutsleader:": "Scouts ervaring:"}</h3>
                    <p>{
                        (!isDutch)?
                        "I am currently in my seventh year as a scouts leader and each week I moderate a group of young adults. Throughout previous years, I stood in front of all ages between 11 and 18, both as co-leader and as the one responsible for the group. During my career, I have learned how to work in a team in a performance-oriented way without losing sight of long-term goals or visions, in which the importance of taking regular and clear reports has been undeniable time and again.":
                        "Ik ben ondertussen mijn zevende jaar scoutsleiding aan het geven en sta ik elke week voor een groep jongvolwassenen. Doorheen de vorige jaren heb ik voor alle leeftijden tussen 11 en 18 jaar gestaan, dit als mede-leider en als verantwoordelijke. Tijdens mijn carrière heb ik geleerd om in teamverband prestatiegericht te werken zonder langdurige doelen of visies uit het oog te verliezen, hierbij is het belangrijk om regelmatig een helder verslag op te stellen."
                    }</p>

                    <h3>{(!isDutch)? "Experience as an Instructor:": "Ervaring als Instructeur:"}</h3>
                    <p>{
                        (!isDutch)? 
                        'I took the instructor course in 2021 and am a recognised instructor in youth work since last year. My main experience is to take groups of experienced scout leaders on courses and then coach them into out-and-out team leaders. Here the focus is mainly on "soft-skills" such as supporting a team, guiding new leaders, framing group dynamics, self-reflection, etc.':
                        'Ik volgde in 2021 de instructeur-cursus en ben sinds vorig jaar ook erkend instructeur in het jeugdwerk. Mijn voornaamste ervaring is om groepen ervaren scoutsleiders mee te nemen op cursus en om hen dan te coachen tot uit de kluiten gewassen team leiders. Hierbij ligt de focus vooral op "soft-skills" zoals een team ondersteunen, nieuwe leiders begeleiden, groepsdynamische processen kaderen, zelfreflectie, etc.'
                    }</p>
                                        
                </div>

                <div className="aspect-ratio-1 flex_center">
                    <img src={kamp21constructie1} alt="perspectief snede" className="largeImageScouts height_100" />
                </div>
                
                <div className="grid-span-2 imageList">
                    <ul><img src={kamp20constructie} alt='kamp20constructie' /></ul>
                    <ul><img src={herfst21wandel} alt="herfst21wandel" /></ul>
                    <ul><img src={kamp21constructie2} alt="kamp21constructie2" /></ul>
                    
                </div>
            </div>
        </div>
    </div>
}