//manage data and ui of link component
import TranscribeBoxLinkUi from "./TranscribeBoxLinkUi";
import Loading from "../../ui/Loading";
import { useState } from "react";
import { useQueryLink } from "../../../api/useQueryLink";
import DataPresent from "../../dataPresent/DataPresent";

const TranscribeBoxLink = () => {
    const [input, setinput] = useState<string>("");
    const { data, isLoading, error } = useQueryLink(input, "fa");

    if (data) {
        console.log(data)
        return <DataPresent data={data["data"][0]["segments"]} />;
    }

    if (isLoading)
        return (
            <div className="text-cgreen grid ">
                <Loading />
            </div>
        );
    if (error) console.log("مشکلی پیش آمد، لطفا دوباره امتحان کنید");
    return <TranscribeBoxLinkUi onClick={setinput} />;
};

export default TranscribeBoxLink;
