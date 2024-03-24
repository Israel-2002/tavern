import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ScrollTop from "./components/ScrollTop";
import LoadingSpinner from "./components/LoadingSpinner";
import { Toaster } from "react-hot-toast";

const About = lazy(() => import("./pages/About"));
const Menu = lazy(() => import("./pages/Menu"));
const MenuDetails = lazy(() => import("./pages/MenuDetails"));
const Contact = lazy(() => import("./pages/Contact"));
const Cart = lazy(() => import("./pages/Cart"));
const BookPage = lazy(() => import("./pages/Book"));
const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));
const ErrorPage = lazy(() => import("./pages/Error"));

function App() {
  return (
    <>
      <Toaster />
      <ScrollTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="about"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <About />
              </Suspense>
            }
          />

          <Route
            path="menu"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Menu />
              </Suspense>
            }
          />

          <Route
            path="menu/:id"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <MenuDetails />
              </Suspense>
            }
          />

          <Route
            path="contact"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Contact />
              </Suspense>
            }
          />

          <Route
            path="cart"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Cart />
              </Suspense>
            }
          />

          <Route
            path="book"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <BookPage />
              </Suspense>
            }
          />

          <Route
            path="signin"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Signin />
              </Suspense>
            }
          />

          <Route
            path="signup"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Signup />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="/*"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ErrorPage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
