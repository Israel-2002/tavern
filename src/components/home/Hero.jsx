import React from "react";
import Container from "../Container";
import SvgIcon from "../SvgIcon";
import potatoIcon from "../../assets/icons/hero/potato.svg";
import cheeseIcon from "../../assets/icons/hero/cheese.svg";
import heroImg from "../../assets/images/home/hero-image.png";
import heroAvatar from "../../assets/images/home/hero-avatar.svg";
import heroIcon from "../../assets/icons/hero/leaves.svg";
import heroScroll from "../../assets/icons/hero/hero-scroll.svg";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import LazyLoad from "../LazyLoad";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="pb-[1.875rem] pt-[6.25rem] md:pt-[7.125rem] lg:pb-[4.375rem] lg:pt-[9.375rem]">
        <h1 className="mb-[1.875rem] text-h1-clamp capitalize md:mb-10 lg:mb-12">
          Food that <SvgIcon img={potatoIcon} alt="potato icon" />
          tastes like a revelation{" "}
          <SvgIcon img={cheeseIcon} alt="cheese icon" />
        </h1>

        <div className="grid gap-4 md:grid-cols-2 lg:gap-8">
          <div className="relative">
            <div className="aspect-video">
              <LazyLoad img={{ src: heroImg }} />
            </div>
            <img
              src={heroIcon}
              alt="hero icon"
              className="absolute -z-10 hidden md:-left-10 md:bottom-20 md:block md:h-[106px] md:w-[124px] lg:-left-20 lg:bottom-0 lg:h-[180px] lg:w-[200px]"
            />
          </div>

          <div>
            <h4 className="font-stylish text-[1.875rem] text-green md:text-[2.5rem]">
              # best place
            </h4>
            <p className="max-w-lg text-lg md:max-w-full lg:text-xl">
              Explore our chef-inspired, fast casual menu boasting diverse
              flavors. Enjoy our standout selection showcasing beloved classics
              from various culinary traditions.
            </p>

            <Button
              label="Book a table"
              className="my-[1.875rem] w-full md:w-fit"
              onClick={() => navigate("/book")}
            />

            <div className="flex flex-col gap-[1.125rem] 520:flex-row md:flex-col md:gap-5 lg:flex-row lg:items-center">
              <div className="flex items-center gap-[0.875rem]">
                <h4 className="text-[1.875rem] lg:text-[2.5rem]">24k+</h4>
                <span className="text-sm text-grey">
                  Happy <br /> customers
                </span>
              </div>

              <div className="flex items-center gap-[0.875rem] 520:border-l 520:pl-5 md:border-hidden md:pl-0 lg:border-solid lg:pl-5">
                <div>
                  <img src={heroAvatar} alt="hero avatar" />
                </div>
                <p className="text-sm text-grey">
                  “best ever place to eat your favorite delicious food”
                </p>
              </div>
            </div>
            <img
              src={heroScroll}
              alt=""
              className="mt-[4.375rem] hidden xl:block"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
