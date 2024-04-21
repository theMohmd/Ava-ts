import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AlertProvider from "./AlertContext";
import LangProvider from "./LangContext";
import ThemeProvider from "./ThemeContext";
const queryClient = new QueryClient();

type ProviderProps = { children: ReactNode };
const Providers = ({ children }: ProviderProps) => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <AlertProvider>
                        <ThemeProvider>
                            <LangProvider>{children}</LangProvider>
                        </ThemeProvider>
                    </AlertProvider>
                </BrowserRouter>
            </QueryClientProvider>
        </>
    );
};

export default Providers;
