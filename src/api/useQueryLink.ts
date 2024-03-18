import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useQueryLink = (enable:boolean) =>
    useQuery({
        queryFn: () => {
            return axios.post(
                "https://harf.roshan-ai.ir/api/transcribe_files/",
                {
                    media_urls: ["https://i.ganjoor.net/a2/41417.mp3"],
                    language: "fa",
                },
                { headers: { Authorization: import.meta.env.VITE_API_KEY } }
            );
        },
        queryKey: ["link"],
        enabled: enable,
    });
