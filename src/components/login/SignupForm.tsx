import { SubmitHandler, useForm } from "react-hook-form";
import { useAlert } from "../../hooks/useAlert";

type FormFields = {
    name: string;
    email: string;
    password: string;
};
const SignupForm = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>();
    const { setalert } = useAlert()
    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(data);
            setalert("ثبت‌نام واقعی نبوده و فقط برای دمو می‌باشد");
        } catch (error) {
            setError("root", {
                message: "This email is already taken",
            });
        }
    };
    return (
        <form
            className="flex flex-col gap-2 justify-center dark:bg-neutral-900 p-5 bg-white rounded-md"
            onSubmit={handleSubmit(onSubmit)}
        >
            <p className="text-center text-2xl font-bold text-cgreen">ثبت‌نام</p>
            <input
                {...register("name", {
                    required: "نام کاربری نمی‌تواند خالی باشد",
                })}
                className="input"
                type="text"
                placeholder="نام کاربری"
            />
            {errors.name && (
                <p className="text-red-700 text-right">{errors.name.message}</p>
            )}
            <input
                {...register("email", {
                    required: "ایمیل نمی‌تواند خالی باشد",
                    pattern: {
                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                        message: "ایمیل معتبر نیست",
                    },
                })}
                className="input"
                type="text"
                placeholder="ایمیل"
            />
            {errors.email && (
                <p className="text-red-700 text-right">
                    {errors.email.message}
                </p>
            )}
            <input
                {...register("password", {
                    required: "کلمه عبور نمی‌تواند خالی باشد",

                    minLength: {
                        value: 8,
                        message: "کلمه عبور حداقل باید ۸ کاراکتر داشته باشد",
                    },
                })}
                className="input"
                type="password"
                placeholder="کلمه‌عبور"
            />
            {errors.password && (
                <p className="text-red-700 text-right">
                    {errors.password.message}
                </p>
            )}
            <button
                dir="rtl"
                className="button"
                disabled={isSubmitting}
                type="submit"
            >
                {isSubmitting ? "درحال ثبت‌نام..." : "ثبت‌نام"}
            </button>
            {errors.root && (
                <div className="text-red-500">{errors.root.message}</div>
            )}
        </form>
    );
};

export default SignupForm;
