//general layout of website
import PhoneNav from "./components/nav/PhoneNav";
import DesktopNav from "./components/nav/DesktopNav";
import { Route, Routes } from "react-router-dom";
import Transcribe from "./pages/Transcribe";
import Archive from "./pages/Archive";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const App = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <div
                className="
            min-h-screen grid
            grid-cols-1 grid-rows-[3rem_1fr]
            md:grid-cols-[5fr_10rem] md:grid-rows-1
            font-iranYekan
            "
            >
                <div className="md:hidden">
                    <PhoneNav />
                </div>
                <div className="hidden md:block col-start-2">
                    <DesktopNav />
                </div>
                <div className=" md:row-start-1">
                    <Routes>
                        <Route
                            path="/Ava/transcribe"
                            element={<Transcribe />}
                        />
                        <Route path="/Ava/archive" element={<Archive />} />
                        <Route path="/Ava/login" element={<Login />} />
                    </Routes>
                </div>
            </div>
        </QueryClientProvider>
    );
};
export default App;
