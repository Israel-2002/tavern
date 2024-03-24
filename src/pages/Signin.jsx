import React from "react";
import Container from "../components/Container";
import signInImg from "../assets/images/signin-image.png";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, githubProvider, googleProvider } from "../../firebase.config";
import toast from "react-hot-toast";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "" } });

  const navigate = useNavigate();

  const submitHandler = async (data) => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      if (!res.user) {
        throw new Error();
      }

      toast.success("Signed In");
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const googleSignIn = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);

      if (!res.user) {
        throw new Error();
      }

      toast.success("Signed In");
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const githubSignIn = async () => {
    try {
      const res = await signInWithPopup(auth, githubProvider);

      if (!res.user) {
        throw new Error();
      }

      toast.success("Signed In");
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <section>
      <Container>
        <h1 className="mx-auto mb-[1.375rem] max-w-2xl text-center text-h1-clamp md:mb-[3.125rem] lg:mb-[4.375rem]">
          Welcome Back!
        </h1>

        <div className="relative mt-[1.875rem] md:mt-[4.375rem]">
          <form
            className="mx-auto w-full max-w-lg rounded-lg lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-white lg:p-[1.875rem]"
            onSubmit={handleSubmit(submitHandler)}
          >
            <div className="mb-[1.875rem] flex flex-col gap-3">
              <Input
                register={register}
                type="email"
                id="email"
                placeholder="Email Address"
                errors={errors}
                required
              />

              <Input
                register={register}
                type="password"
                id="password"
                placeholder="Password"
                errors={errors}
                required
              />
            </div>
            <Button
              type="submit"
              label="Sign In"
              className="w-full max-w-xl rounded-md"
            />
            <p className="mt-3 text-center text-grey">
              Don't have an account?{" "}
              <span
                className="cursor-pointer text-dark"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </span>
            </p>

            <div className="mt-[1.875rem] flex items-center gap-4">
              <div className="w-full border-t"></div>
              <span className="text-grey">or</span>
              <div className="w-full border-t"></div>
            </div>

            <div className="mt-[1.875rem] grid gap-3">
              <Button
                type="button"
                icon={FcGoogle}
                label="Sign in with Google"
                transparent
                className="w-full rounded-md"
                onClick={googleSignIn}
              />

              <Button
                type="button"
                icon={AiFillGithub}
                label="Sign in with Github"
                transparent
                className="w-full rounded-md"
                onClick={githubSignIn}
              />
            </div>
          </form>

          <img src={signInImg} alt="" className="mx-auto hidden lg:block" />
        </div>
      </Container>
    </section>
  );
};

export default Signin;
