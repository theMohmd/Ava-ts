import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { AlertContext } from "../../context/AlertContext";
import { useContext } from "react";
import { alertType } from "../../@types/alert";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
    name: z.string(),
});
type FormFields = z.infer<typeof schema>;
const SignupForm = () => {
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
                className="input"
                {...register("name")}
                type="text"
                placeholder="نام"
            />
            {errors.name && (
                <div className="text-red-500">{errors.name.message}</div>
            )}
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
            <input
                className="input"
                {...register("confirmPassword")}
                type="password"
                placeholder="تکرار کلمه عبور"
            />
            {errors.confirmPassword && (
                <div className="text-red-500">{errors.confirmPassword.message}</div>
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
