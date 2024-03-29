import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: { main: "#00BA9F", contrastText: "white" },
    },
    direction: "rtl",
    typography: {
        fontFamily: `"IranSans", sans-serif`,
    },
});
const ArchivePagination = ({
    count,
    setpage,
}: {
    count: number;
    setpage: React.Dispatch<React.SetStateAction<number>>;
}) => {
    return (
        <ThemeProvider theme={theme}>
            <Pagination
                count={count}
                color="primary"
                onChange={(event, page) => {
                    event;
                    setpage(page);
                }}
                className=" [&>ul>li>button]:dark:text-gray-200"
                sx={{
                    direction: "rtl",
                    "& .Mui-selected": {
                        color: "text.secondary",
                    },
                }}
            />
        </ThemeProvider>
    );
};

export default ArchivePagination;
