import React from "react";
import Hero from "../components/home/Hero";
import fishIcon from "../assets/icons/hero/fish.svg";
import SvgIcon from "../components/SvgIcon";
import About from "../components/home/About";
import Features from "../components/home/Features";
import Description from "../components/home/Description";
import Menu from "../components/home/Menu";
import Book from "../components/Book";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="bg-primary px-[1.125rem] py-10 text-center">
        <h3 className="line mx-auto max-w-4xl text-2xl md:text-3xl lg:py-[3.4375rem] lg:text-4xl xl:text-5xl">
          We aim to build globally adored, trusted restaurant brands with top
          franchise partnerships for rapid, unparalleled success.{" "}
          <SvgIcon img={fishIcon} alt="fish icon" />
        </h3>
      </div>

      <About />
      <Features />
      <Description />
      <Menu />

      <section className="mt-0 bg-dark">
        <Book />
      </section>
    </>
  );
};

export default Home;
