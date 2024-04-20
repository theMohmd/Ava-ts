import { useContext } from "react";
import { AlertContext } from "../context/AlertContext";
import { alertType } from "../@types/alert";

export const useAlert = () => useContext(AlertContext) as alertType;
