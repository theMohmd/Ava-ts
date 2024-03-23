import { useState } from "react";
import LoginUi from "../login/LoginUi";

const Login = () => {
    const [mode, setmode] = useState<"signup" | "login">("signup");
    return (
        <div className="grid justify-center items-center">
            <div className="grid p-5 rounded-xl md:p-10 navBg h-[60dvh] w-[80dvw] md:w-[60dvw]">
                <div className="flex overflow-hidden flex-col md:flex-row">
                    <div
                        className={`duration-500 overflow-hidden order-1 ${
                            mode === "login"
                                ? "h-1/2 md:w-1/2 md:h-full"
                                : "h-0 md:w-0 md:h-full"
                        }  `}
                    >
                        <LoginUi />
                    </div>
                    <div
                        className="order-4 h-1/2 md:order-2 md:w-1/2 md:h-full"
                        onClick={() =>
                            setmode((prev) => {
                                if (prev === "signup") return "login";
                                else return "signup";
                            })
                        }
                    ></div>
                    <div
                        className={`duration-500  overflow-hidden order-3 ${
                            mode === "signup"
                                ? "h-1/2 md:w-1/2 md:h-full"
                                : "h-0 md:w-0 md:h-full"
                        }  `}
                    >
                        //signup component
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
