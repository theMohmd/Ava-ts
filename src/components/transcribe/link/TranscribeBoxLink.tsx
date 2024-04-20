//manage data and ui of link component
import TranscribeBoxLinkUi from "./TranscribeBoxLinkUi";
import Loading from "../../ui/Loading";
import { useCallback, useContext, useState } from "react";
import { useQueryLink } from "../../../api/useQueryLink";
import DataPresent from "../../dataPresent/DataPresent";
import { LangContext } from "../../../context/LangContext";
import { langContextType } from "../../../@types/lang";
import { useAlert } from "../../../hooks/useAlert";


const TranscribeBoxLink = () => {
    const [input, setinput] = useState<string>("");
    const { lang } = useContext(LangContext) as langContextType;
    const { data, isLoading, error } = useQueryLink(input, lang);
    const { setalert } = useAlert()
    const reset = useCallback(() => {
        setinput("");
    }, []);
    if (input) {
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
    return <TranscribeBoxLinkUi onClick={setinput} />;
};

export default TranscribeBoxLink;
