import PhoneNav from "./components/PhoneNav";
import DesktopNav from "./components/DesktopNav";
import { Route, Routes } from "react-router-dom";
const App = () => {
    return (
        <div
            className="
            min-h-screen grid
            grid-cols-1 grid-rows-[3rem_1fr]
            sm:grid-cols-[8fr_1fr] sm:grid-rows-1
            font-iranYekan
            "
        >
            <div className="sm:hidden">
                <PhoneNav />
            </div>
            <div className="hidden sm:block col-start-2">
                <DesktopNav />
            </div>
            <div className=" sm:row-start-1">
                <Routes>
                    <Route path="/Ava/speech" element={<div>hi</div>} />
                    <Route path="/Ava/archive" element={<div>by</div>} />
                </Routes>
            </div>
        </div>
    );
};
export default App;
