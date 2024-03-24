import Container from "../components/Container";
import React from "react";
import aboutImg from "../assets/images/about/about-image.png";
import aboutImg2 from "../assets/images/about/about-image2.png";
import chefImg from "../assets/images/about/chef.png";
import chefImg1 from "../assets/images/about/chef-1.png";
import chefImg2 from "../assets/images/about/chef-2.png";
import chefImg3 from "../assets/images/about/chef-3.png";
import chefImg4 from "../assets/images/about/chef-4.png";
import chefImg5 from "../assets/images/about/chef-5.png";
import LazyLoad from "../components/LazyLoad";

const chefs = [
  { name: "David Warner", img: chefImg },
  { name: "Aaron Finch", img: chefImg1 },
  { name: "Steven Smith", img: chefImg2 },
  { name: "Mitchell Marsh", img: chefImg3 },
  { name: "Chris Green", img: chefImg4 },
  { name: "Adam Zampa", img: chefImg5 },
];

const About = () => {
  return (
    <section>
      <Container>
        <h1 className="mx-auto mb-[1.375rem] max-w-2xl text-center text-h1-clamp md:mb-[3.125rem] lg:mb-[4.375rem]">
          We Make Delicious and Fresh Food
        </h1>

        <div className="mx-auto aspect-[16/7] text-center">
          <LazyLoad img={{ src: aboutImg }} className="" />
        </div>

        <div className="mt-[4.375rem] md:ml-auto md:w-4/5 lg:mt-[9.375rem] lg:w-3/5">
          <h4 className="font-stylish text-[1.875rem] text-green md:text-[2.5rem]">
            # our story
          </h4>
          <div className="font-header text-xl leading-normal md:text-2xl lg:text-3xl">
            <p className="mb-[1.875rem]">
              In 1998, Tavern was born from a shared love for crafting culinary
              experiences that transcend the ordinary. Our journey began with a
              commitment to blending tradition and innovation, resulting in a
              menu bursting with flavor and creativity.
            </p>
            <p>
              Nestled in the heart of our community, we invite you to join us on
              a gastronomic adventure where every dish tells a story of passion
              and excellence. Welcome to our culinary sanctuary, where memories
              are made, and palates are delighted.
            </p>
          </div>
        </div>

        <div className="mt-[4.375rem] grid gap-[1.875rem] md:grid-cols-2 lg:mt-[9.375rem]">
          <div>
            <h4 className="font-stylish text-[1.875rem] text-green md:text-[2.5rem]">
              # about us
            </h4>

            <h2 className="mb-3 max-w-md text-h2-clamp md:mb-[1.125rem]">
              Our goal is to bring quality food
            </h2>
            <p className="max-w-xl text-grey lg:text-lg">
              Tavern is simply the better choice when it comes to freshly made,
              convenient and affordable food. We're one of the world's largest
              restaurant brands for a reason, serving up a craveable menu with
              better-for-you options to our millions of customers, every day.
            </p>
          </div>
          <div>
            <img src={aboutImg2} alt="" />
          </div>
        </div>

        <div className="mt-[1.875rem] flex flex-col gap-[1.125rem] md:mt-[4.375rem] md:flex-row">
          <div className="flex-1 rounded-md bg-white p-[3.125rem] text-center md:p-[1.875rem]">
            <h3 className="mb-3 text-6xl sm:text-[5rem]">1998</h3>
            <span className="text-grey lg:text-lg">Founded</span>
          </div>

          <div className="flex-1 rounded-md bg-dark p-[3.125rem] text-center md:p-[1.875rem]">
            <h3 className="mb-3 text-6xl text-white sm:text-[5rem]">200k+</h3>
            <span className="text-white/40 lg:text-lg">Happy Customers</span>
          </div>

          <div className="flex-1 rounded-md bg-white p-[3.125rem] text-center md:p-[1.875rem]">
            <h3 className="mb-3 text-6xl sm:text-[5rem]">97%</h3>
            <span className="text-grey lg:text-lg">Positive Reviews</span>
          </div>
        </div>

        <div className="mt-[4.375rem] lg:mt-[9.375rem]">
          <h2 className="mb-[1.875rem] text-center text-h2-clamp xl:mb-[4.375rem]">
            Meet our experienced chefs
          </h2>

          <ul className="grid place-items-center gap-[1.125rem] text-center sm:grid-cols-2 md:grid-cols-3 md:gap-[1.875rem]">
            {chefs.map((chef, i) => (
              <li key={i}>
                <div className="aspect-[1/1]">
                  <LazyLoad img={{ src: chef.img }} className="mb-2" />
                </div>
                <span className="text-xl font-bold lg:text-2xl">
                  {chef.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default About;
