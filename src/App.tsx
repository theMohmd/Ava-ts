//general layout of website
import PhoneNav from "./components/nav/PhoneNav";
import DesktopNav from "./components/nav/DesktopNav";
import { Route, Routes, Navigate } from "react-router-dom";
import Transcribe from "./pages/Transcribe";
import Archive from "./pages/Archive";
import Login from "./pages/Login";
import Alert from "./components/alert/Alert";
import AlertProvider from "./context/AlertContext";
const App = () => {
    return (
        <AlertProvider>
            <div
                className="
                min-h-screen grid
                grid-cols-1 grid-rows-[3rem_1fr]
                md:grid-cols-[5fr_10rem] md:grid-rows-1
                font-iranYekan
                bg-gray-100 dark:bg-neutral-900
                "
            >
                <Alert />
                <div className="md:hidden">
                    <PhoneNav />
                </div>
                <div className="hidden md:block col-start-2">
                    <DesktopNav />
                </div>
                <div className=" md:row-start-1 grid">
                    <Routes>
                        <Route
                            path="/Ava"
                            element={<Navigate replace to="/Ava/transcribe" />}
                        />
                        <Route
                            path="/Ava/transcribe"
                            element={<Transcribe />}
                        />
                        <Route path="/Ava/archive" element={<Archive />} />
                        <Route path="/Ava/login" element={<Login />} />
                    </Routes>
                </div>
            </div>
        </AlertProvider>
    );
};
export default App;
