import React from "react";
import Container from "../components/Container";
import pizzaImg from "../assets/images/404-image.svg";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <section className="grid min-h-screen place-items-center">
      <Container>
        <div className="text-center">
          <h1 className="mx-auto mb-[1.875rem] flex w-fit items-center gap-5 text-[5.625rem] md:mb-[3.125rem] md:text-[7.5rem] lg:text-[9.375rem] xl:text-[11.25rem]">
            4
            <span>
              <img
                src={pizzaImg}
                alt=""
                className="h-[5.625rem] w-[5.625rem] md:h-[7.5rem] md:w-[7.5rem] lg:h-[9.375rem] lg:w-[9.375rem] xl:h-[11.25rem] xl:w-[11.25rem]"
              />
            </span>
            4
          </h1>
          <h2 className="mb-4 text-h2-clamp lg:mb-[1.125rem]">
            Oops, Page not found.
          </h2>
          <p className="mb-[1.875rem] text-grey lg:mb-[2.375rem] lg:text-lg">
            The requested URL you are looking for doesn't exist on this server.
          </p>
          <Button
            label="Back to Home"
            onClick={() => navigate("/")}
            className="w-fit"
          />
        </div>
      </Container>
    </section>
  );
};

export default Error;
