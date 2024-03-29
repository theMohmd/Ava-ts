//api request for single archive file
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useQuerySingleArchive = (id: number) =>
    useQuery({
        queryFn: () => {
            return axios.get(
                "https://harf.roshan-ai.ir/api/get_request/" + id,
                {
                    headers: {
                        Authorization: import.meta.env.VITE_API_KEY,
                    },
                }
            );
        },
        queryKey: ["singleArchive", id],
        staleTime: Infinity,
    });
