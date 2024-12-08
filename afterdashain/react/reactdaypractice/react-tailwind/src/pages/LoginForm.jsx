import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { login } from "../api/auth";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();

  const { mutate: loginMutate, isPending } = useMutation({
    mutationFn: login,
    onError: (err) => {
      console.log(err);
    },
    onSuccess: (data) => {
      console.log(data);
      localStorage.setItem("token", data.token);
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
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <form
        className=" w-80 p-8 rounded-3xl bg-white shadow-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="flex justify-center text-2xl mb-10 font-medium">
          Login Form
        </h1>
        <input
          placeholder="username"
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
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-3"
          type="submit"
        />
      </form>
    </div>
  );
}

export default LoginForm;
