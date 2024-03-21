//api request for link component of transcribe
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { langType } from "../../../@types/lang";
export const useQueryLink = (input: string, lang: langType) =>
    useQuery({
        queryFn: () => {
            return axios.post(
                "https://harf.roshan-ai.ir/api/transcribe_files/",
                {
                    media_urls: [input],
                    language: lang,
                },
                { headers: { Authorization: import.meta.env.VITE_API_KEY } }
            );
        },
        queryKey: ["link"],
        enabled: input !== "",
    });
