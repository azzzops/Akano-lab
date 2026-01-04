import { BrowserRouter, Router, Route, Routes } from "react-router";
import App from "./App";
import PrivacyPage from "./components/ui/privacy";
import Condition from "./components/ui/condition";
export default function UserRoutes(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="privacy" element={<PrivacyPage />} />
                <Route path="condition" element={<Condition />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}