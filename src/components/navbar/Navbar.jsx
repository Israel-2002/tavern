import React, { useRef, useState } from "react";
import Logo from "../Logo";
import Container from "../Container";
import { Link, useNavigate } from "react-router-dom";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import MenuItems from "./MenuItems";
import Button from "../Button";
import Backdrop from "../Backdrop";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../../../firebase.config";
import useCurrentUser from "../../hooks/useCurrentUser";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigationRef = useRef();

  const navigate = useNavigate();

  const { currentUser } = useCurrentUser();

  const openNavigation = () => {
    navigationRef.current.style.left = "0%";
    navigationRef.current.style.transition = "300ms linear";

    setIsOpen(true);
  };

  const closeNavigation = () => {
    navigationRef.current.style.left = "-100%";
    setIsOpen(false);
  };

  const signout = async () => {
    try {
      await signOut(auth);
      navigate(0);
      toast.success("Signed out");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <nav className="fixed left-0 top-0 z-40 w-full bg-light py-[1.125rem] md:py-5 lg:py-6">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>

          <div className="lg:hidden">
            <RiMenuLine
              size={24}
              className="text-dark"
              onClick={openNavigation}
            />

            {isOpen && <Backdrop onClick={closeNavigation} />}

            <div
              className="absolute -left-[100%] top-0 z-30 grid h-screen w-[85%] place-items-center bg-light text-center md:w-[40%]"
              ref={navigationRef}
            >
              <RiCloseLine
                size={28}
                className="absolute right-[1.125rem] top-[1.125rem]"
                onClick={closeNavigation}
              />
              <div>
                <MenuItems onClick={closeNavigation} />

                <div className="mt-8 flex flex-col gap-4">
                  {!currentUser ? (
                    <Button
                      label="Sign In"
                      transparent
                      onClick={() => {
                        closeNavigation();
                        navigate("/signin");
                      }}
                    />
                  ) : (
                    <Button
                      label="Sign Out"
                      transparent
                      onClick={() => {
                        closeNavigation();
                        signout();
                      }}
                    />
                  )}
                  <Button
                    label="Book a tabel"
                    dark
                    onClick={() => {
                      closeNavigation();
                      navigate("/book");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-28 lg:flex xl:gap-48 ">
            <MenuItems />

            <div className="flex gap-2">
              {!currentUser ? (
                <Button
                  label="Sign In"
                  transparent
                  onClick={() => {
                    closeNavigation();
                    navigate("/signin");
                  }}
                />
              ) : (
                <Button
                  label="Sign Out"
                  transparent
                  onClick={() => {
                    closeNavigation();
                    signout();
                  }}
                />
              )}
              <Button
                label="Book a tabel"
                dark
                onClick={() => navigate("/book")}
              />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
