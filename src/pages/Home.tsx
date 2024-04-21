const h3Class = "text-2xl";
const pClass = "mt-4 text-neutral-700";
const Home = () => {
    return (
        <div dir="rtl" className="text-center pt-20 px-10 ">
            <h1 className="text-4xl font-bold text-cgreen">آوا</h1>
            <h1 className="text-3xl mt-8">سرویس تبدیل صوت به متن</h1>
            <p className={pClass}>
                با استفاده از سرویس ما به راحتی فایل‌های صوتی خود را به متن در
                زبان‌های انگلیسی و فارسی تبدیل کنید!
            </p>
            <div className="flex md:flex-row flex-col mt-8 gap-4">
                <div className="mode">
                    <h3 className={h3Class}>ضبط زنده</h3>
                    <p className={pClass}>
                        با استفاده از این حالت می‌توانید صدا را در حالت زنده ضبط
                        کنید و به متن تبدیل کنید.
                    </p>
                </div>
                <div className="mode">
                    <h3 className={h3Class}>آپلود</h3>
                    <p className={pClass}>
                        فایل‌های صوتی پیش‌تر ضبط شده خود را بارگذاری کنید و ما
                        آنها را به متن تبدیل خواهیم کرد.
                    </p>
                </div>
                <div className="mode">
                    <h3 className={h3Class}>لینک</h3>
                    <p className={pClass}>
                        ارائه پیوند URL مربوط به محتوای آنلاین صوتی خود و ما آن
                        را به متن تبدیل می‌کنیم.
                    </p>
                </div>
            </div>
            <p className={pClass + " mt-8"}>
                همچنین امکان تبدیل به متن در دو زبان انگلیسی و فارسی برای شما
                فراهم شده است.
            </p>
            <p className={pClass}>
                به راحتی و بدون نیاز به نصب نرم‌افزار، به تبدیل صوت به متن
                بپردازید!
            </p>
        </div>
    );
};

export default Home;
