export const colors = {
    grad1: "#00b5a0",
    grad2: "#00c69b",
    cred: "#FF1654",
    cblue: "#118AD3",
    cgreen: "#00BA9F",
    cActiveGreen: "#02816E",
};
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "selector",
    theme: {
        extend: {
            colors: colors,
            fontFamily: {
                iranYekan: ["iranYekan", "sans-serif"],
                iranSans: ["iranSans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
