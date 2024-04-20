//api request for single archive file
import { useQuery } from "@tanstack/react-query";
//import axios from "axios";
import { dumbdata } from "./dumbData";
import { useAlert } from "../hooks/useAlert";
export const useQuerySingleArchive = (id: number) => {
    const { setalert } = useAlert();
    return useQuery({
        queryFn:async () => {
            setalert("این نتیجه صرفا برای دمو می‌باشد");
            await new Promise((r) => setTimeout(r, 500));
            return dumbdata;
            /*
            return axios.get(
                "https://harf.roshan-ai.ir/api/get_request/" + id,
                {
                    headers: {
                        Authorization: import.meta.env.VITE_API_KEY,
                    },
                }
            );
            */
        },
        queryKey: ["singleArchive", id],
        staleTime: Infinity,
        refetchIntervalInBackground: false,
    });
};
