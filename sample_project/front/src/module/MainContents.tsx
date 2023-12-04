/**
 * @module MainContents.tsx
 * @author S.Utsumi
 */

import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { SamplePage1 } from "./pages/Sample";
import { SettingPage } from "./pages/Setting";

/**
 * メインコンテンツ
 * @function
 * @returns {JSX.Element}
 */
export const MainContents = (): JSX.Element => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/setting' element={<SettingPage />} />
            <Route path='/sample' element={<SamplePage1 />} />
        </Routes>
    );

};