import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AlertProvider from "./context/AlertContext";
import LangProvider from "./context/LangContext";
import ThemeProvider from "./context/ThemeContext";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <AlertProvider>
                <ThemeProvider>
                    <LangProvider>
                        <App />
                    </LangProvider>
                </ThemeProvider>
            </AlertProvider>
        </BrowserRouter>
    </QueryClientProvider>
);
