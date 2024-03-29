//login form
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { AlertContext } from "../../context/AlertContext";
import { useContext } from "react";
import { alertType } from "../../@types/alert";
const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const { setalert } = useContext(AlertContext) as alertType;
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
                className="input"
                {...register("email")}
                type="text"
                placeholder="ایمیل"
            />
            {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
            )}
            <input
                className="input"
                {...register("password")}
                type="password"
                placeholder="کلمه عبور"
            />
            {errors.password && (
                <div className="text-red-500">{errors.password.message}</div>
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
