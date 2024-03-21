//component for showing styled alerts
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { alertType } from "../@types/alert";
import { AlertContext } from "../context/AlertContext";
const Alert = () => {
    const { alert, setalert } = useContext(AlertContext) as alertType;
    useEffect(() => {
        if (alert)
            setTimeout(() => {
                setalert("");
            }, 3000);
    }, [setalert, alert]);
    return (
        <AnimatePresence>
            {alert && (
                <motion.div
                    initial={{ left: -100, opacity: 0 }}
                    animate={{ left: 10, opacity: 100 }}
                    exit={{ left: -100, opacity: 0 }}
                    className=" text-right min-w-60 bg-red-400 rounded-md border-red-800 border p-5 absolute top-5 left-5"
                >
                    {alert}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Alert;
