import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Main from "./pages/mainPage";
import Test from "./pages/test";

export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/personalPortfolio/" element={<Main/>} />
                    <Route path="/personalPortfolio/test" element={<Test/>} />
                </Routes>
            </Router>
        </div>
     )
}