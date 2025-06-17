import { Button } from "@/components/ui/button";
import { useLogin } from "@/hooks/hooks";
import type { LoginResponse, LoginUser } from "@/types/auth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginShema } from "@/schema/loginSchema";
import { useAuthStore } from "@/store/auth-store";
import Logo from "@/components/common/logo";

const Login = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const initialValues: LoginUser = {
    email: "",
    password: "",
  };

  const handleLogin = async (data: LoginUser) => {
    const response: LoginResponse = await useLogin({ data });
    if (response?.user) {
      login({ user: response.user, token: response.token });
      localStorage.setItem("token", response?.token);
      toast(response?.message, {
        type: "success",
      });
      navigate("/home");
    } else {
      toast(response?.message, {
        type: "error",
      });
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={loginShema}
        onSubmit={(values) => handleLogin(values)}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="flex items-center">
              <div className="w-[50vw] h-screen">
                <div className="p-60">
                  <Logo className="w-20 rounded-sm mb-3" />
                  <h1 className="font-bold text-[30px]">Welcome Back!</h1>
                  <p>
                    Login to discover personalized music recommendations just
                    for you.
                  </p>

                  <div className="my-5">
                    <h1>Email Address</h1>
                    <Field
                      type="email"
                      name="email"
                      className="border-[0.1px] text-sm mt-2 w-full p-3 outline-none rounded-sm"
                      placeholder="you@gmail.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="my-5">
                    <h1>Password</h1>
                    <Field
                      type="password"
                      name="password"
                      className="border-[0.1px] text-sm mt-2 w-full p-3 outline-none rounded-sm"
                      placeholder="****************"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-7 cursor-pointer"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </Button>

                  <p className="text-sm py-5">
                    <Link to="/create-account">
                      Don't have an account? Create One
                    </Link>
                  </p>
                </div>
              </div>

              <img
                src="/login.jpg"
                className="w-[50vw] rounded-l-4xl h-screen object-cover"
                alt="Man Wearing Headphones"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
