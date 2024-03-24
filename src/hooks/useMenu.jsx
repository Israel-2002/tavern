import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import menus from "../data";

const useMenu = () => {
  const [allMeals, setAllMeals] = useState(
    JSON.parse(localStorage.getItem("all")) || [],
  );

  const [selectedMeals, setSelectedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearchParam = searchParams.get("category");

  const location = useLocation();

  const getRandomMeals = () => {
    let meals = [];
    const clonedMenus = [...menus].filter((menu) => menu.category !== "sweets");

    let amount;
    if (location.pathname !== "/menu") {
      amount = 5;
    } else {
      amount = 8;
    }

    for (let i = 0; i <= amount; i++) {
      const randomIndex = Math.floor(Math.random() * clonedMenus.length) - 1;

      let selectedMeal = clonedMenus.splice(randomIndex, 1);

      meals = [...selectedMeal, ...meals];
    }

    return meals;
  };

  useEffect(() => {
    const meals = menus.filter((menu) => menu.category === currentSearchParam);

    if (currentSearchParam === null) {
      if (allMeals.length > 0) return;

      setAllMeals(getRandomMeals());
      localStorage.setItem("all", JSON.stringify(getRandomMeals()));
    }

    setSelectedMeals(meals);
  }, [currentSearchParam]);

  let displayMeals = currentSearchParam === null ? allMeals : selectedMeals;

  useEffect(() => {
    displayMeals.length === 0 ? setIsLoading(true) : setIsLoading(false);
  }, [displayMeals.length]);

  return {
    isLoading,
    displayMeals,
  };
};

export default useMenu;
