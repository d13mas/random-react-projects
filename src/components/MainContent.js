import React from "react";
import { Route, Routes } from 'react-router-dom';

// Pages
import HomeP from '../pages/HomeP';
import JokesP from '../pages/JokesP';
import BoxesP from '../pages/BoxesP';
import FormsP from '../pages/FormP';
import ApicallP from '../pages/ApicallP';
import NotFoundP from '../pages/NotFoundP';

const MainContent = ({ mode }) => (
    <div className={`main ${mode}`}>
        <Routes>
            <Route path="/" element={<HomeP />} exact />
            <Route path="/jokes" element={<JokesP />} />
            <Route path="/api-call" element={<ApicallP />} />
            <Route path="/boxes" element={<BoxesP mode={ mode } />} />
            <Route path="/form" element={<FormsP />} />
            <Route element={<NotFoundP />} />
        </Routes>
    </div>
)

export default MainContent;