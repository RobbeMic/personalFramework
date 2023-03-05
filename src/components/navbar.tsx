import React from "react";

import { AiOutlineLinkedin } from 'react-icons/ai'
import { HiAtSymbol } from 'react-icons/hi2'

export default function NavBar() {
    return <div className="navbar">
        <ul key={"linkedin"}><AiOutlineLinkedin className="icon"/></ul>
        <ul key={"email"}><HiAtSymbol className="icon"/></ul>
        <ul key={"cv"}>CV</ul>
    </div>
}