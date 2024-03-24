import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const MealsNavbar = () => {
  const [navItems, setNavItems] = useState([
    {
      label: "All",
      param: "all",
      selected: true,
    },
    {
      label: "Breakfast",
      param: "breakfast",
      selected: false,
    },
    {
      label: "Burgers",
      param: "burgers",
      selected: false,
    },
    {
      label: "Sandwiches",
      param: "sandwiches",
      selected: false,
    },
    {
      label: "Sweets",
      param: "sweets",
      selected: false,
    },
  ]);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const updateSearchParams = (param) => {
    navItems.forEach((item, i) => {
      item.param === param ? (item.selected = true) : (item.selected = false);
    });

    if (param === "all") {
      return setSearchParams("");
    }

    const query = {
      category: param,
    };

    setSearchParams(query);
  };

  useEffect(() => {
    if (location.pathname === "/menu") {
      setNavItems((prev) => {
        const updatedNavItems = prev.map((item) => {
          if (item.label === "All") {
            return {
              ...item,
              selected: true,
            };
          }

          return { ...item, selected: false };
        });

        return updatedNavItems;
      });
    }
  }, []);

  useEffect(() => {
    setNavItems((prev) => {
      let updatedNavItems = [...prev];

      updatedNavItems.map((item) => {
        if (item.param === searchParams.get("category")) {
          item.selected = true;
        } else {
          item.selected = false;
        }

        if (searchParams.get("category") === null && item.param === "all") {
          item.selected = true;
        }
      });

      return updatedNavItems;
    });
  }, [searchParams.get("category")]);

  return (
    <nav className="mx-auto mb-[1.875rem] flex max-w-[580px] justify-between gap-[3.4375rem] overflow-x-scroll md:overflow-hidden lg:mb-[4.375rem] lg:max-w-2xl">
      {navItems.map((item, i) => (
        <li
          key={i}
          className={`cursor-pointer text-lg  hover:text-primary lg:text-xl ${item.selected ? "text-primary" : "text-grey"}`}
          onClick={() => updateSearchParams(item.param)}
        >
          <h6 className="font-header">{item.label}</h6>
        </li>
      ))}
    </nav>
  );
};

export default MealsNavbar;
