//api request for archive page
import { useQuery } from "@tanstack/react-query";
import { useAlert } from "../hooks/useAlert";
//import axios from "axios";

const dumbArchiveData = {
    count: 28,
    results: [
        {
            date: "24/4/17",
            duration: "4:20",
            id: 1,
            name: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        },
        {
            date: "24/4/17",
            duration: "4:20",
            id: 2,
            name: "demo2",
        },
        {
            date: "24/4/17",
            duration: "4:20",
            id: 3,
            name: "demo3",
        },
        {
            date: "24/4/17",
            duration: "4:20",
            id: 4,
            name: "demo4",
        },
        {
            date: "24/4/17",
            duration: "4:20",
            id: 5,
            name: "demo5",
        },
        {
            date: "24/4/17",
            duration: "4:20",
            id: 6,
            name: "demo6",
        },
        {
            date: "24/4/17",
            duration: "4:20",
            id: 7,
            name: "demo7",
        },
        {
            date: "24/4/17",
            duration: "4:20",
            id: 8,
            name: "demo8",
        },
        {
            date: "24/4/17",
            duration: "4:20",
            id: 9,
            name: "demo9",
        },
        {
            date: "24/4/17",
            duration: "4:20",
            id: 10,
            name: "demo10",
        },
    ],
};
export const useQueryArchive = (page: number) => {
    const { setalert } = useAlert();
    return useQuery({
        queryFn: async() => {
            setalert("این نتیجه صرفا برای دمو می‌باشد");
            await new Promise((r) => setTimeout(r, 500));
            return dumbArchiveData;
            /*
            return axios.get(
                "https://harf.roshan-ai.ir/api/requests?page=" + page,
                {
                    headers: {
                        Authorization: import.meta.env.VITE_API_KEY,
                    },
                }
            );
            */
        },
        queryKey: ["archive", page],
        refetchIntervalInBackground: false,
    });
};
