import React from "react";
import Container from "../components/Container";
import contactImg from "../assets/images/contact-image.png";
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import useCurrentUser from "../hooks/useCurrentUser";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
  });

  const { currentUser } = useCurrentUser();
  const navigate = useNavigate();

  const submitHandler = (data) => {
    if (!currentUser) {
      navigate("/signin");
    }
  };

  return (
    <section>
      <Container>
        <h1 className="mx-auto max-w-xl text-center text-h1-clamp">
          Hi, how can we help you?
        </h1>

        <div className="mx-auto mt-[1.875rem] max-w-6xl md:mt-[4.375rem]">
          <div className="mx-auto grid max-w-xl rounded-3xl lg:max-w-none lg:grid-cols-2 lg:bg-white">
            <div className="relative hidden lg:block">
              <div className="absolute left-[1.875rem] top-[3.75rem] z-20 text-white">
                <h3 className="mb-[1.125rem] text-[2.5rem] text-white xl:text-[3.125rem]">
                  Contact Details
                </h3>
                <p className="mb-[1.875rem] max-w-md text-lg xl:text-xl">
                  We will be in touch soon to get you started on your
                  collaboration journey.
                </p>

                <div className="mb-[1.125rem] flex items-center gap-2">
                  <RiPhoneFill size={24} color="white" />
                  <span className="text-lg xl:text-xl">(+233) 333 333 333</span>
                </div>

                <div className="flex items-center gap-2">
                  <RiMailFill size={24} color="white" />
                  <span className="text-lg xl:text-xl">tavern@gmail.com</span>
                </div>
              </div>

              <img src={contactImg} alt="" />
            </div>

            <form
              className="lg:p-[1.875rem]"
              onSubmit={handleSubmit(submitHandler)}
            >
              <div className="mb-[1.875rem] grid gap-3">
                <Input
                  placeholder="First Name"
                  id="firstname"
                  register={register}
                  errors={errors}
                  required
                />

                <Input
                  placeholder="Last Name"
                  id="lastname"
                  register={register}
                  errors={errors}
                  required
                />

                <Input
                  placeholder="Email Address"
                  type="email"
                  id="email"
                  register={register}
                  errors={errors}
                  required
                />

                <textarea
                  {...register("message", { required: true })}
                  cols="30"
                  rows="10"
                  placeholder="Write your message here..."
                  className={`rounded-md border border-grey bg-transparent p-4 outline-grey  focus:border-transparent focus:outline ${errors["message"] && "border-rose-500"} ${errors["message"] && "outline-rose-500"} ${errors["message"] ? "placeholder:text-rose-500" : "placeholder:text-gray-500"}`}
                ></textarea>
              </div>
              <Button label="Submit" className="w-full max-w-none rounded-md" />
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
