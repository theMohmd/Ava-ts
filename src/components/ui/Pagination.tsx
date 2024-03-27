import { useEffect, useState } from "react";

type PaginationProps = {
    count: number;
};
type page = {
    value: string;
    data: number;
};
const Pagination = ({ count }: PaginationProps) => {
    const [current, setcurrent] = useState(1);
    const [buttons, setbuttons] = useState<page[]>([{ value: "1", data: 1 }]);
    useEffect(() => {
        const temp: page[] = [];
        if (current <= 5) {
            temp.push({ value: "1", data: 1 });
        }
        setbuttons(temp);
    }, [current]);
    useEffect(() => {
        console.log(buttons);
    }, [buttons]);
    return (
        <div>
        {buttons.reduce((item) => { item.value })}
            <button
                onClick={() => {
                    buttons.map((item) => {
                        console.log(item.value);
                    });
                }}
            >
                click me
            </button>
        </div>
    );
};

export default Pagination;
