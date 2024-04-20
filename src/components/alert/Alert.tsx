//component for showing styled alerts
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useAlert } from "../../hooks/useAlert";

const Alert = () => {
    const { alert, setalert } = useAlert();
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
                    className="absolute z-50 top-5 left-5 p-5 text-right bg-red-400 rounded-md border border-red-800 min-w-60"
                >
                    {alert}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Alert;
