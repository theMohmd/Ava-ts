export type langType = "fa" | "en";
export type langContextType = {
    lang: langType;
    setlang: React.Dispatch<React.SetStateAction<lang>>;
};
