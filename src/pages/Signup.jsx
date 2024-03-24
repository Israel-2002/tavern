import React from "react";
import Container from "../components/Container";
import signUpImg from "../assets/images/signup-image.png";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../../firebase.config";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { firstname: "", lastname: "", email: "", password: "" },
  });

  const submitHandler = async (data) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      if (!res.user) {
        throw new Error();
      }

      toast.success("Signed Up");
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
          Let's Get Started
        </h1>

        <div className="relative mt-[1.875rem] md:mt-[4.375rem]">
          <form
            className="mx-auto w-full max-w-lg rounded-lg lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-white lg:p-[1.875rem]"
            onSubmit={handleSubmit(submitHandler)}
          >
            <div className="mb-[1.875rem] flex flex-col gap-3">
              <Input
                register={register}
                id="firstname"
                placeholder="First Name"
                errors={errors}
                required
              />

              <Input
                register={register}
                id="lastname"
                placeholder="Last Name"
                errors={errors}
                required
              />

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
              label="Sign Up"
              className="w-full max-w-xl rounded-md"
              type="submit"
            />
            <p className="mt-3 text-center text-grey">
              Already have an account?{" "}
              <span
                className="cursor-pointer text-dark"
                onClick={() => navigate("/signin")}
              >
                Sign in
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

          <img src={signUpImg} alt="" className="mx-auto hidden lg:block" />
        </div>
      </Container>
    </section>
  );
};

export default Signup;
