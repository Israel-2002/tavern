import React from "react";
import Container from "../Container";
import featureImg from "../../assets/images/home/home-features.png";
import featureImg2 from "../../assets/images/home/home-features-2.png";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import LazyLoad from "../LazyLoad";

const Features = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-0">
      <Container>
        <div className="flex flex-col gap-[1.875rem] md:flex-row lg:gap-[4.125rem] xl:gap-[8.125rem]">
          <div>
            <h4 className="font-stylish text-[1.875rem] text-green md:text-[2.5rem]">
              # features
            </h4>

            <h2 className="mb-[1.875rem] max-w-lg text-h2-clamp xl:mb-[4.375rem]">
              We are the best restaurant in town
            </h2>

            <div className="aspect-square">
              <LazyLoad img={{ src: featureImg2 }} className="mb-3 lg:mb-5" />
            </div>

            <h6 className="mb-1 text-lg font-bold text-dark sm:mb-3 sm:text-xl lg:text-[1.375rem]">
              Party & Bar
            </h6>
            <p className="max-w-lg text-sm text-grey sm:text-base lg:text-lg">
              An awesome agave selection that is designed to have you take a
              journey through Mexico via our tasting flights.
            </p>
          </div>
          <div>
            <div className="aspect-square">
              <LazyLoad img={{ src: featureImg }} className="mb-3 lg:mb-5" />
            </div>

            <h6 className="mb-1 text-lg font-bold text-dark sm:mb-3 sm:text-xl lg:text-[1.375rem]">
              Lunch & Dinner
            </h6>
            <p className="lg:text-md max-w-lg text-sm text-grey sm:text-base">
              Find fun casual fare during your lunch hour that is reminiscent of
              Mercadito Taqueria Food Truck.
            </p>
          </div>
        </div>

        <Button
          label="Browse Menu"
          className="mt-[1.875rem] w-full md:mx-auto md:mt-[2.125rem] md:block md:w-fit lg:mt-[3.4375rem]"
          onClick={() => navigate("/menu")}
        />
      </Container>
    </section>
  );
};

export default Features;
