import { useState } from "react";
import LoginForm from "../components/login/LoginForm";
import SignupForm from "../components/login/SignupForm";
import { motion } from "framer-motion";

const Login = () => {
    const [mode, setmode] = useState<"signup" | "login">("login");
    return (
        <div className="grid justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    backgroundSize: "50% auto",
                }}
                className="alefbaBg grid p-2 rounded-xl md:p-4 h-[80dvh] w-[80dvw] md:w-[60dvw]"
            >
                <div className="flex overflow-hidden flex-col md:flex-row">
                    <div
                        className={`grid duration-500 overflow-y-auto overflow-x-hidden  order-2 mb-5 md:mb-0 ${
                            mode === "login"
                                ? "h-4/5 md:w-2/3 md:h-full"
                                : "h-0 md:w-0 md:h-full"
                        }  `}
                    >
                        <LoginForm />
                    </div>
                    <div className="flex flex-col order-1 gap-2 justify-center h-1/3 md:mx-5 md:order-3 md:w-1/3 md:h-full">
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
                        className={`grid duration-500 overflow-y-auto overflow-x-hidden order-4  ${
                            mode === "signup"
                                ? "h-4/5 md:w-2/3 md:h-full"
                                : "h-0 md:w-0 md:h-full"
                        }  `}
                    >
                        <SignupForm />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
