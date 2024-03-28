//api request for archive page
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useQueryArchive = (page: number) =>
    useQuery({
        queryFn: () => {
            return axios.get(
                "https://harf.roshan-ai.ir/api/requests?page=" + page,
                {
                    headers: {
                        Authorization: import.meta.env.VITE_API_KEY,
                    },
                }
            );
        },
        queryKey: ["archive", page],
        staleTime: Infinity,
        refetchIntervalInBackground: false,
    });
