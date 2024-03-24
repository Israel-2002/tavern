import React from "react";
import Container from "../Container";
import ticketIcon from "../../assets/icons/hero/ticket.svg";
import truckIcon from "../../assets/icons/hero/truck.svg";
import bowlIcon from "../../assets/icons/hero/bowl.svg";

const Description = () => {
  return (
    <div className="bg-dark px-[1.125rem] py-10">
      <Container>
        <div className="mx-auto flex max-w-7xl flex-col gap-[1.875rem] md:flex-row">
          <div className="flex gap-4">
            <img src={ticketIcon} alt="" className="h-8 w-8 md:h-12 md:w-12" />

            <div>
              <h6 className="mb-1 text-lg font-bold text-white sm:mb-3 sm:text-xl lg:text-[1.375rem]">
                Exclusive Deals
              </h6>
              <p className="lg:text-md max-w-sm text-sm text-white/60 sm:text-base">
                Get rewards and exclusive deals on your favorite food items.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={truckIcon} alt="" className="h-8 w-8 md:h-12 md:w-12" />

            <div>
              <h6 className="mb-1 text-lg font-bold text-white sm:mb-3 sm:text-xl lg:text-[1.375rem]">
                Get It Delivered
              </h6>
              <p className="lg:text-md max-w-sm text-sm text-white/60 sm:text-base">
                Don't want to drive? No problem. We are always near you.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={bowlIcon} alt="" className="h-8 w-8 md:h-12 md:w-12" />

            <div>
              <h6 className="mb-1 text-lg font-bold text-white sm:mb-3 sm:text-xl lg:text-[1.375rem]">
                Fresh Food
              </h6>
              <p className="lg:text-md max-w-sm text-sm text-white/60 sm:text-base">
                Fresh, filling and flavorful. What more could you ask for?
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Description;
