import { useState } from "react";
import LoginForm from "../components/login/LoginForm";
import SignupForm from "../components/login/SignupForm";

const Login = () => {
    const [mode, setmode] = useState<"signup" | "login">("login");
    return (
        <div className="grid justify-center items-center">
            <div className="grid p-5 rounded-xl md:p-10 navBg h-[60dvh] w-[80dvw] md:w-[60dvw]">
                <div className="flex overflow-hidden flex-col gap-5 md:flex-row">
                    <div
                        className={`grid duration-500 overflow-hidden order-1 ${
                            mode === "login"
                                ? "h-2/3 md:w-2/3 md:h-full"
                                : "h-0 md:w-0 md:h-full"
                        }  `}
                    >
                        <LoginForm />
                    </div>
                    <div className="flex flex-col gap-2 justify-center order-4 h-1/3 md:order-2 md:w-1/3 md:h-full">
                        <p className="text-center text-white">
                            {mode === "signup"
                                ? "قبلا حساب ساخته اید؟"
                                : "هنوز حساب نساخته اید؟"}
                        </p>
                        <button
                            onClick={() =>
                                setmode((prev) => {
                                    if (prev === "signup") return "login";
                                    else return "signup";
                                })
                            }
                            className="button dark:!bg-neutral-900 !bg-white !text-cgreen rounded-xl p2 "
                        >
                            {mode === "signup" ? "ورود" : "ثبت‌نام"}
                        </button>
                    </div>
                    <div
                        className={`grid duration-500 overflow-hidden order-3 ${
                            mode === "signup"
                                ? "h-2/3 md:w-2/3 md:h-full"
                                : "h-0 md:w-0 md:h-full"
                        }  `}
                    >
                        <SignupForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
