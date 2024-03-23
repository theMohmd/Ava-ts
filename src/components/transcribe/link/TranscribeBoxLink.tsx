//manage data and ui of linx component
import TranscribeBoxLinkUi from "./TranscribeBoxLinkUi";
import Loading from "../../ui/Loading";
import { useState } from "react";
import { useQueryLink } from "./useQueryLink";

const TranscribeBoxLink = () => {
    const [input, setinput] = useState<string>("");
    const { data, isLoading, error } = useQueryLink(input, "fa");

    if (data) {
        setinput(""); //prevent refetching
        return (
            <div>
                <button
                    className="button"
                    onClick={() => console.log(JSON.stringify(data["data"]))}
                >
                    onClick
                </button>
            </div>
        );
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
