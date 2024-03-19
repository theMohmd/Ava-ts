const Archive = () => {
    return (
        <div
            onDrop={(e) => {
                e.preventDefault();
                console.log(e);
            }}
        >
            Archive
        </div>
    );
};

export default Archive;
