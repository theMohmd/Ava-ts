import { ReactNode, useContext } from "react";
import { AlertContext } from "../../context/AlertContext";
import { alertType } from "../../@types/alert";

type FileDropProps = {
    children: ReactNode;
    setfile: React.Dispatch<React.SetStateAction<File | null>>;
};
const FileDrop = ({ children, setfile: setfiles }: FileDropProps) => {
    const {setalert} = useContext(AlertContext) as alertType
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file: FileList = e.dataTransfer.files;
        if (file.length > 1) {
            setalert("فقط یک فایل مجاز است");
        } else {
            setfiles(file[0]);
        }
    };
    return (
        <div
            onDragOver={(e) => {
                e.preventDefault();
            }}
            onDrop={(e) => {
                handleDrop(e);
            }}
        >
            {children}
        </div>
    );
};

export default FileDrop;
