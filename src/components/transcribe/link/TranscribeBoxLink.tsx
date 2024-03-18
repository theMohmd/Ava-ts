//manage data and ui of linx component
import TranscribeBoxLinkUi from "./TranscribeBoxLinkUi";
import { useState } from "react";
import Loading from "../../ui/Loading";

import { useQueryLink } from "../../../api/useQueryLink";
const TranscribeBoxLink = () => {
    const [enableQuery ] = useState(false);
    const { data, isLoading } = useQueryLink(enableQuery);
    if (!data) return <TranscribeBoxLinkUi />;
    if (isLoading) return <Loading />;
    return <div> data </div>;
};

export default TranscribeBoxLink;
