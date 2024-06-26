import { useContext } from "react";
import { langContextType } from "../@types/lang";
import { LangContext } from "../context/LangContext";
export const useLang = () => useContext(LangContext) as langContextType;
