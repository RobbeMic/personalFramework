import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Main from "./pages/mainPage";
import FinalMainPage from "./pages/finalMainPage";

import StudioADisplay from "./components/studioADisplay";
import KapelDisplay from "./components/kapelDisplay";
import DensityDisplay from "./components/densityDisplay";
import ThesisDisplay from "./components/thesisDisplay";
import ScoutsDisplay from "./components/scoutsDisplay";

export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/personalPortfolio/" element={<FinalMainPage/>} />
                    {/* <Route path="/personalPortfolio/studioA" element={StudioADisplay(true, () => {console.log('beep')}, false)}/>
                    <Route path="/personalPortfolio/kapel" element={KapelDisplay(true, () => {console.log('beep')}, false)}/>
                    <Route path="/personalPortfolio/density" element={DensityDisplay(true, () => {console.log('beep')}, false)}/>
                    <Route path="/personalPortfolio/thesis" element={ThesisDisplay(true, () => {console.log('beep')}, false)}/>
                    <Route path="/personalPortfolio/scouts" element={ScoutsDisplay(true, () => {console.log('beep')}, false)}/> */}
                </Routes>
            </Router>
        </div>
     )
}