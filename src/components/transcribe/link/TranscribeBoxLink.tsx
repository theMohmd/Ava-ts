//manage data and ui of link component
import TranscribeBoxLinkUi from "./TranscribeBoxLinkUi";
import Loading from "../../ui/Loading";
import { useCallback, useState } from "react";
import { useQueryLink } from "../../../api/useQueryLink";
import DataPresent from "../../dataPresent/DataPresent";
import { useAlert } from "../../../hooks/useAlert";
import { useLang } from "../../../hooks/useLang";


const TranscribeBoxLink = () => {
    const [input, setinput] = useState<string>("");
    const { lang } = useLang()
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
