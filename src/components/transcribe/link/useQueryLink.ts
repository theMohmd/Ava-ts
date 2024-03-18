//api request for linc component of transcribe
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useQueryLink = (input: string, lang: "fa" | "en") =>
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
