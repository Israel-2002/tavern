import React from "react";
import Container from "../Container";
import Map from "./Map";
import FooterHead from "./FooterHead";
import Button from "../Button";
import facebook from "../../assets/icons/footer/Facebook.svg";
import instagram from "../../assets/icons/footer/Instagram.svg";
import linkedin from "../../assets/icons/footer/Linkedin.svg";
import twitter from "../../assets/icons/footer/Twitter.svg";

const Footer = () => {
  return (
    <footer className="mt-[1.875rem] md:mt-[4.375rem]">
      <Container>
        <FooterHead />
        <Map />

        <div className="mx-auto flex max-w-3xl flex-col gap-[1.875rem] text-center md:flex-row-reverse">
          <div>
            <h6 className="mb-3 text-lg font-bold md:mb-4">
              Join Our Community
            </h6>
            <p className="mb-5 text-grey md:mb-6">
              Join our food community to see all the latest things about food
            </p>
            <Button label="Join Our Community" className="w-full md:w-fit" />
          </div>
          <div>
            <h6 className="mb-3 text-lg font-bold md:mb-4">Connect With Us</h6>
            <p className="mb-5 text-grey md:mb-6">
              We specializes in chef-inspired, fast casual cuisine from all over
              the Mediterranean.
            </p>

            <div className="mx-auto flex w-fit gap-3">
              <img src={facebook} alt="" />
              <img src={linkedin} alt="" />
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
        </div>
      </Container>

      <div className="mt-[1.875rem] bg-dark p-8 text-center text-white/40 md:mt-[3.4375rem]">
        <p>Copyright 2023, all rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
