import { ReactNode, createContext, useState } from "react";
import { alertType } from "../@types/alert";
export const AlertContext = createContext<alertType | null>(null);

const AlertProvider = ({ children }: { children: ReactNode }) => {
    const [alert, setalert] = useState("");
    return (
        <AlertContext.Provider value={{ alert, setalert }}>
            {children}
        </AlertContext.Provider>
    );
};

export default AlertProvider;

