const Loading = () => {
    return (
        <div className="flex gap-2 items-center justify-center">
            <div className="bg-current rounded-full animate-bounce size-4"></div>
            <div className="bg-current rounded-full animate-bounce animate-delay-100 size-4"></div>
            <div className="bg-current rounded-full animate-bounce animate-delay-200 size-4"></div>
        </div>
    );
};

export default Loading;
