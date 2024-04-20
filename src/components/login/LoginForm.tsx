//login form
import { SubmitHandler, useForm } from "react-hook-form";
import { useAlert } from "../../hooks/useAlert";

type FormFields = { email: string; password: string };

const LoginForm = () => {
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
            setalert("ورود واقعی نبوده و فقط برای دمو می‌باشد");
        } catch (error) {
            setError("root", {
                message: "This email is already taken",
            });
        }
    };
    return (
        <form
            className="flex flex-col gap-2 justify-center p-5 bg-white rounded-md dark:bg-neutral-900"
            onSubmit={handleSubmit(onSubmit)}
        >
            <p className="text-2xl font-bold text-center text-cgreen">ورود</p>
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
                <p className="text-red-500 text-right">
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
                placeholder="کلمه عبور"
            />
            {errors.password && (
                <p className="text-red-500 text-right">
                    {errors.password.message}
                </p>
            )}
            <button dir="rtl" className="button" disabled={isSubmitting} type="submit">
                {isSubmitting ? "درحال ورود..." : "ورود"}
            </button>
            {errors.root && (
                <div className="text-red-500">{errors.root.message}</div>
            )}
        </form>
    );
};

export default LoginForm;
