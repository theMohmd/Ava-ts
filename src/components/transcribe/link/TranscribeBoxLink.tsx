//manage data and ui of link component
import TranscribeBoxLinkUi from "./TranscribeBoxLinkUi";
import Loading from "../../ui/Loading";
import { useCallback, useContext, useState } from "react";
import { useQueryLink } from "../../../api/useQueryLink";
import DataPresent from "../../dataPresent/DataPresent";
import { AlertContext } from "../../../context/AlertContext";
import { alertType } from "../../../@types/alert";

const TranscribeBoxLink = () => {
    const [input, setinput] = useState<string>("");
    const { data, isLoading, error } = useQueryLink(input, "fa");
    const { setalert } = useContext(AlertContext) as alertType;
    const reset = useCallback(() => {
        setinput("");
    }, []);
    if (input) {
        if (data) {
            return (
                <DataPresent reset={reset} data={data["data"][0]["segments"]} />
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
