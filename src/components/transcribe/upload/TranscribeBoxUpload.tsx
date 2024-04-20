//manage data and ui for upload component
import { useCallback, useContext, useState } from "react";
import TranscribeBoxUploadUi from "./TranscribeBoxUploadUi";
import Loading from "../../ui/Loading";
import { useQueryUpload } from "../../../api/useQueryUpload";
import DataPresent from "../../dataPresent/DataPresent";
import { LangContext } from "../../../context/LangContext";
import { langContextType } from "../../../@types/lang";
import { useAlert } from "../../../hooks/useAlert";

const TranscribeBoxUpload = () => {
    const { lang } = useContext(LangContext) as langContextType;
    const [file, setfile] = useState<File | null>(null);
    const { data, isLoading, error } = useQueryUpload(file, lang);
    const { setalert } = useAlert()
    const reset = useCallback(() => {
        setfile(null);
    }, []);
    if (file) {
        if (data) {
            return (
                <DataPresent reset={reset} data={data} />
            );
        }
        if (isLoading)
            return (
                <div className="text-cgreen grid ">
                    <Loading />
                </div>
            );
        if (error) setalert("مشکلی پیش آمد، لطفا دوباره امتحان کنید");
    }
    return (
        <>
            <TranscribeBoxUploadUi setfile={setfile} />
        </>
    );
};

export default TranscribeBoxUpload;
