import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: { main: "#00BA9F", contrastText: "white" },
        background: { paper: "green" },
    },
    direction: "rtl",
    typography: {
        fontFamily: `"IranSans", sans-serif`,
    },
});
const ArchivePagination = () => {
    return (
        <ThemeProvider theme={theme}>
            <Pagination
                count={10}
                color="primary"
                sx={{
                    direction: "rtl",
                    "& .Mui-selected": {
                        color: "text.secondary",
                        background: "background.paper",
                    },
                }}
            />
        </ThemeProvider>
    );
};

export default ArchivePagination;
