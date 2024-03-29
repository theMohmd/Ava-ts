import { ReactNode, createContext, useState } from "react";
import { langContextType, langType } from "../@types/lang";

export const LangContext = createContext<langContextType | null>(null);

const LangProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setlang] = useState<langType>("fa");
    return (
        <LangContext.Provider value={{ lang, setlang }}>
            {children}
        </LangContext.Provider>
    );
};

export default LangProvider;
