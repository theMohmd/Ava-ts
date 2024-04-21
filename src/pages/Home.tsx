const Home = () => {
    return (
        <div
            dir="rtl"
            className="[&_p]:mt-4 [&>p]:dark:text-neutral-300 overflow-auto h-[calc(100dvh_-_3rem)] [&>p]:text-neutral-600 [&_div]:text-white [&_h3]:text-2xl dark:text-white text-center pt-10  md:pt-20 px-10 "
        >
            <h1 className="text-4xl font-bold text-cgreen">آوا</h1>
            <h1 className="mt-8 text-3xl">سرویس تبدیل صوت به متن</h1>
            <p className="">
                با استفاده از سرویس ما به راحتی فایل‌های صوتی خود را به متن در
                زبان‌های انگلیسی و فارسی تبدیل کنید!
            </p>
            <div className="flex flex-col gap-4 mt-8 md:flex-row">
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
            <p className="!mt-8">
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
