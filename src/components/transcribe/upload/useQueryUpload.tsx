//api request for upload component of transcribe
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useQueryUpload = (input: File | null, lang: "fa" | "en") =>
    useQuery({
        queryFn: () => {
            if (!input) return;
            const bodyFormData = new FormData();
            bodyFormData.append("language", lang);
            bodyFormData.append("media", input);
            return axios.post(
                "https://harf.roshan-ai.ir/api/transcribe_files/",
                bodyFormData,
                {
                    headers: {
                        Authorization: import.meta.env.VITE_API_KEY,
                    },
                }
            );
        },
        queryKey: ["upload"],
        enabled: input !== null,
    });
