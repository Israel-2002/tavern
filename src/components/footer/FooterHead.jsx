import React from "react";
import clock from "../../assets/icons/footer/clock.svg";
import message from "../../assets/icons/footer/message.svg";
import home from "../../assets/icons/footer/home.svg";


const FooterHead = () => {
  return (
    <div className="mb-[1.875rem] grid gap-[3.25rem] md:mb-[3.75rem] md:grid-cols-3 md:flex-row">
      <div className="flex items-start gap-4">
        <img src={clock} alt="" />
        <div>
          <h6 className="mb-3 text-xl font-bold sm:text-2xl">Business Hours</h6>

          <div className="mb-[0.375rem] flex w-fit flex-col text-sm xl:flex-row xl:gap-2 xl:text-base">
            <span className="font-bold">Sun - Thur</span>
            <span className="font-normal text-grey">07:00 am - 10:00 pm</span>
          </div>

          <div className="flex w-fit flex-col text-sm xl:flex-row xl:gap-2 xl:text-base">
            <span className="font-bold">Fri - Sat</span>
            <span className="font-normal text-grey">07:00 am - 11:00 pm</span>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <img src={home} alt="" />
        <div>
          <h6 className="mb-3 text-xl font-bold sm:text-2xl">Location</h6>

          <p className="text-sm text-grey xl:text-base">
            Tavern Restaurant & Party Center 121/2 Seddon Park Road, Auckland ,
            NZ 123569
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <img src={message} alt="" />
        <div>
          <h6 className="mb-3 text-xl font-bold sm:text-2xl">Contact</h6>

          <div className="mb-[0.375rem] w-fit text-sm xl:text-base">
            <span className="font-bold">Email:</span>{" "}
            <span className="font-normal text-grey">tavern@gmail.com</span>
          </div>

          <div className="w-fit text-sm xl:text-base">
            <span className="font-bold">Phone:</span>{" "}
            <span className="font-normal text-grey">+233 333 333 333</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHead;
