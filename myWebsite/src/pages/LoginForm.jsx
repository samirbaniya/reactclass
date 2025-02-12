import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { login } from "../api/auth";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
// import { AlertDialogDemo } from "@/mycomponents/AlertBox";

function LoginForm() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const redirect = params.get("redirect") || "/";
  const { loginStore } = useAuthStore();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const { mutate: loginMutate, isPending } = useMutation({
    mutationFn: login,
    // eslint-disable-next-line no-unused-vars
    onError: (err) => {
      toast({
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
        title: "Login Failed!!!",
        description: "Please try again",
        variant: "destructive",
      });
    },
    onSuccess: (data) => {
      // console.log(data.token);
      loginStore(data.token);
      toast({
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
        title: "Successful!!!",
        description: "Logged in successfully!!",
      });
      // AlertDialogDemo({ message: "logged in successfully" });
      navigate(redirect);
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const onSubmit = (data) => {
    const userData = {
      username: data.username,
      password: data.password,
    };
    loginMutate(userData);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen dark:bg-slate-500 bg-slate-100">
      <form
        className=" w-80 p-8 rounded-3xl dark:bg-slate-700 bg-white shadow-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="flex justify-center text-2xl mb-10 font-medium">
          Login Form
        </h1>
        <input
          placeholder="username"
          type="text"
          className="placeholder-gray-700 min-w-60 bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-3"
          {...register("username", {
            required: { message: "Username is required", value: true },
          })}
        />
        {errors.username && (
          <span className="text-red-600">{errors.username.message}</span>
        )}
        {/* include validation with required or other standard HTML validation rules */}
        <input
          placeholder="password"
          type="password"
          className="placeholder-gray-700 min-w-60 bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-3"
          {...register("password", {
            required: { message: "Password is required", value: true },
            // pattern: {
            //   value:
            //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            //   message:
            //     "Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character",
            // },
          })}
        />
        {/* errors will return when field validation fails  */}
        {errors.password && (
          <span className="text-red-600 mb-3 block">
            {errors.password.message}
          </span>
        )}

        <input
          disabled={isPending}
          className={`hover:cursor-pointer text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center m-3 ${
            isPending
              ? "bg-blue-400 dark:bg-blue-500 flex items-center justify-center"
              : "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          }`}
          type="submit"
          value={isPending ? "Logging..." : "Login"}
        />
        <div className="text-purple-800 underline">
          <NavLink to={"/"}>
            <div>Continue without Loging</div>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
