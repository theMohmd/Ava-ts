//manage data and ui for upload component
import { useState } from "react";
import TranscribeBoxUploadUi from "./TranscribeBoxUploadUi";
import Loading from "../../ui/Loading";
import { useQueryUpload } from "./useQueryUpload";

TranscribeBoxUploadUi;
const TranscribeBoxUpload = () => {
    const [file, setfile] = useState<File | null>(null);
    const { data, isLoading, error } = useQueryUpload(file, "fa");

    if (data) return <div> data </div>;
    if (isLoading) return <Loading />;
    if (error) console.log('مشکلی پیش آمد، لطفا دوباره امتحان کنید')
    return (
        <>
            <TranscribeBoxUploadUi setfile={setfile} />
        </>
    );
};

export default TranscribeBoxUpload;
