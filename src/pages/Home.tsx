const Home = () => {
    return (
        <div
            dir="rtl"
            className="
            py-10 md:py-20 px-10 text-center dark:text-white
            [&_p]:mt-2 [&_p]:md:mt-4 [&_p]:text-sm [&_p]:md:text-base
            [&>p]:dark:text-neutral-300 [&>p]:text-neutral-600
            [&_div]:text-white
            [&_h3]:text-xl [&_h3]:md:text-2xl
            "
        >
            <h1 className="text-3xl font-bold md:text-4xl text-cgreen">آوا</h1>
            <h1 className="mt-6 md:mt-8 text-2xl md:text-3xl">سرویس تبدیل صوت به متن</h1>
            <p className="">
                با استفاده از سرویس ما به راحتی فایل‌های صوتی خود را به متن در
                زبان‌های انگلیسی و فارسی تبدیل کنید!
            </p>
            <div className="flex flex-col gap-2 mt-6 md:mt-8 md:flex-row">
                <div className="p-4 rounded-xl alefbaBg">
                    <h3 className="">ضبط زنده</h3>
                    <p className="">
                        با استفاده از این حالت می‌توانید صدا را در حالت زنده ضبط
                        کنید و به متن تبدیل کنید.
                    </p>
                </div>
                <div className="p-4 rounded-xl alefbaBg">
                    <h3 className="">آپلود</h3>
                    <p className="">
                        فایل‌های صوتی پیش‌تر ضبط شده خود را بارگذاری کنید و ما
                        آنها را به متن تبدیل خواهیم کرد.
                    </p>
                </div>
                <div className="p-4 rounded-xl alefbaBg">
                    <h3 className="">لینک</h3>
                    <p className="">
                        ارائه پیوند URL مربوط به محتوای آنلاین صوتی خود و ما آن
                        را به متن تبدیل می‌کنیم.
                    </p>
                </div>
            </div>
            <p className="md:mt-8 !mt-6">
                همچنین امکان تبدیل به متن در دو زبان انگلیسی و فارسی برای شما
                فراهم شده است.
            </p>
            <p className="">
                به راحتی و بدون نیاز به نصب نرم‌افزار، به تبدیل صوت به متن
                بپردازید!
            </p>
        </div>
    );
};

export default Home;
