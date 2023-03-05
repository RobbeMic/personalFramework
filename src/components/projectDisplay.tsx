import React from "react";

import '../styles/modal.css'

export default function ProjectDisplay(open:boolean, setModalToClose:Function) {
    return <div className={open? "modalBackground": "hidden"} >
        <div className="modal">
            <span onClick={() => setModalToClose(false)}>X</span>
            <div className="modalGrid">
                <div className="aspect-ratio-1 titleSquare">
                    <h1>test</h1>
                    <h3>the test title square and there is some explanation yeey! lorem ipsum dolor sit emet</h3>
                </div>

                <div className="aspect-ratio-1">
                    <h2>huh?</h2>
                </div>
                
                <div className="grid-span-2 imageList">
                    <ul>lorem</ul>
                    <ul>ipsum</ul>
                    <ul>dolor</ul>
                </div>
            </div>
        </div>
    </div>
}