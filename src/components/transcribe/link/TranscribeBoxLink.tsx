//manage data and ui of linx component
import TranscribeBoxLinkUi from "./TranscribeBoxLinkUi";
import Loading from "../../ui/Loading";
import { useState } from "react";
import { useQueryLink } from "./useQueryLink";

const TranscribeBoxLink = () => {
    const [input, setinput] = useState<string>("");
    const { data, isLoading } = useQueryLink(input, "fa");

    if (data) return <div> data </div>;
    if (isLoading) return <Loading />;
    return <TranscribeBoxLinkUi onClick={setinput} />;
};

export default TranscribeBoxLink;
