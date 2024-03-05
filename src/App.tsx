//import Red from "./components/ui/Red";
import PhoneNav from "./components/PhoneNav";
import DesktopNav from "./components/DesktopNav";
const App = () => {
    return (
        <div
            className="
            min-h-screen grid
            grid-cols-1 grid-rows-[3rem_1fr]
            sm:grid-cols-[8fr_1fr] sm:grid-rows-1
            font-iranYekan
            bg-black
            "
        >
            <div className="sm:hidden">
                <PhoneNav />
            </div>
            <div className="hidden sm:block col-start-2">
                <DesktopNav />
            </div>
            <div className=" sm:row-start-1"></div>
        </div>
    );
};
export default App;
