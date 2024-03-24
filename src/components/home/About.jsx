import React from "react";

import aboutImg from "../../assets/images/home/home-about.png";
import Container from "../../components/Container";
import hornImg from "../../assets/icons/hero/horn.svg";
import Button from "../../components/Button";
import SvgIcon from "../SvgIcon";
import { useNavigate } from "react-router-dom";
import LazyLoad from "../LazyLoad";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="text-center">
      <Container>
        <div className="relative">
          <SvgIcon
            img={hornImg}
            className="absolute right-0 top-[15%] hidden md:block"
          />
          <h4 className="font-stylish text-[1.875rem] text-green md:text-[2.5rem]">
            # about us
          </h4>

          <h2 className="mx-auto mb-[1.875rem] max-w-xl text-h2-clamp xl:mb-[4.375rem]">
            One of a kind fine dining for you
          </h2>

          <div className="aspect-[16/7]">
            <LazyLoad img={{ src: aboutImg }} />
          </div>

          <p className="mx-auto mt-[1.875rem] max-w-2xl text-grey lg:mt-[1.125rem] lg:text-lg">
            Our family extends our warmest welcome. Come share an evening with
            us! We think you'll find that no other restaurant offers such a
            unique combination of culinary delights, attentive service and
            elegant ambiance.
          </p>

          <Button
            label="Learn more"
            className="mt-[1.875rem] w-full md:w-fit lg:mt-[2.375rem]"
            onClick={() => navigate("/about")}
          />
        </div>
      </Container>
    </section>
  );
};

export default About;
