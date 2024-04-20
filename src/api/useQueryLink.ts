//api request for link component of transcribe
import { useQuery } from "@tanstack/react-query";
//import axios from "axios";
import { langType } from "../@types/lang";
import { useAlert } from "../hooks/useAlert";
import { dumbdata } from "./dumbData";
export const useQueryLink = (input: string, lang: langType) => {
    const {setalert} = useAlert()
    return useQuery({
        queryFn:async () => {
            setalert("این نتیجه صرفا برای دمو می‌باشد")
            await new Promise((r) => setTimeout(r, 500));
            return dumbdata;
            /*
            return axios.post(
                "https://harf.roshan-ai.ir/api/transcribe_files/",
                {
                    media_urls: [input],
                    language: lang,
                },
                { headers: { Authorization: import.meta.env.VITE_API_KEY } }
            );
            */
        },
        queryKey: ["link", lang],
        enabled: input !== "",
        staleTime: Infinity,
        refetchIntervalInBackground: false,
    });
};
