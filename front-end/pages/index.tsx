import type { NextPage } from "next";
import "bootstrap";

import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import AboutUs from "./partials/AboutUs";
import Features from "./partials/Features";
import AppHead from "./partials/Head";
import Hero from "./partials/Hero";
import Info from "./partials/Info";
import Slides from "./partials/Slides";

const Home: NextPage = () => {
  return (
    <>
      <AppHead title="Home" />

      <Navbar />

      <main className="page landing-page">
        <Hero />
        <Info />
        <Features />
        <Slides />
        <AboutUs />
      </main>

      <Footer />
    </>
  );
};

export default Home;
