//general layout of website
import PhoneNav from "./components/nav/PhoneNav";
import DesktopNav from "./components/nav/DesktopNav";
import { Route, Routes } from "react-router-dom";
import Transcribe from "./pages/Transcribe";
import Archive from "./pages/Archive";
import Login from "./pages/Login";
import Alert from "./components/alert/Alert";
import LinkToCode from "./components/ui/LinkToCode";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { themeContextType } from "./@types/theme";
import Home from "./pages/Home";
const App = () => {
    const { theme } = useContext(ThemeContext) as themeContextType;
    return (
        <div
            className={`
                grid grid-cols-1 grid-rows-[3rem_1fr]
                md:grid-cols-[5fr_10rem] md:grid-rows-1
                h-dvh
                font-iranYekan
                bg-gray-100
                ${theme ? "dark" : null}  dark:bg-neutral-900`}
        >
            {/*link to source code*/}

            <LinkToCode />
            {/*custom alert box*/}
            <Alert />
            <div className="md:hidden">
                <PhoneNav />
            </div>
            <div className="hidden col-start-2 md:block">
                <DesktopNav />
            </div>
            <div className="grid overflow-auto md:row-start-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/transcribe" element={<Transcribe />} />
                    <Route path="/archive" element={<Archive />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </div>
    );
};
export default App;
