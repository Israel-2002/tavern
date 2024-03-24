import React from "react";
import Input from "./Input";
import Container from "./Container";
import profile from "../assets/icons/Profile.svg";
import call from "../assets/icons/Call.svg";
import calendar from "../assets/icons/Calendar.svg";
import message from "../assets/icons/Message.svg";
import arrowDown from "../assets/icons/Arrow-Down.svg";
import time from "../assets/icons/Time-Circle.svg";
import Button from "./Button";
import { useForm } from "react-hook-form";

const Book = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: null,
      email: "",
      amount: null,
      date: null,
      time: null,
    },
  });

  const submitHandler = (data) => {};

  return (
    <div>
      <Container>
        <h4 className="text-center font-stylish text-[1.875rem] text-green md:text-[2.5rem]">
          # book your seat
        </h4>

        <h2 className="mx-auto  mb-3 max-w-lg text-center text-h2-clamp text-white lg:mb-[1.125rem]">
          Book your table to get the best
        </h2>

        <p className="mb-[1.875rem] text-center text-white/60 xl:mb-[4.375rem]">
          Book your table for lunch or dinner. We provide the best.
        </p>

        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-[1.875rem]">
            <Input
              icon={profile}
              placeholder="Your name"
              register={register}
              errors={errors}
              id="name"
              required
              book
            />

            <Input
              icon={call}
              type="number"
              placeholder="Phone number"
              register={register}
              errors={errors}
              id="phone"
              required
              book
            />

            <Input
              icon={message}
              type="email"
              placeholder="Email address"
              register={register}
              errors={errors}
              id="email"
              required
              book
            />

            <Input
              icon={arrowDown}
              type="number"
              placeholder="1 person"
              register={register}
              errors={errors}
              id="amount"
              required
              book
            />

            <Input
              icon={calendar}
              type="date"
              placeholder="mm/yy/dd"
              register={register}
              errors={errors}
              id="date"
              required
              book
            />

            <Input
              icon={time}
              type="time"
              register={register}
              errors={errors}
              id="time"
              required
              book
            />
          </div>

          <Button
            label="Reserve Now"
            className="mx-auto mt-[1.875rem] block w-full max-w-xl md:mt-[2.375rem] md:w-fit"
          />
        </form>

        <div className="mt-[1.875rem] md:mt-[3.4375rem]">
          <h3 className="text-center text-2xl text-white sm:text-[1.875rem]">
            Dinning Hours
          </h3>

          <div className="mt-5 flex flex-col space-y-4 text-sm text-white sm:text-base">
            <div className="mx-auto flex w-fit items-center gap-2">
              <span className="font-bold">Sunday - Thursday</span>
              <span className="font-normal text-white/40">
                07:00 am - 10:00 pm
              </span>
            </div>
            <div className="mx-auto flex w-fit items-center gap-2">
              <span className="font-bold">Friday - Saturday</span>
              <span className="font-normal text-white/40">
                07:00 am - 11:00 pm
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Book;
