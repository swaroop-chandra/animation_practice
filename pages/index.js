import Head from "next/head";
import { useState } from "react";
import Home from "../components/home";
import Quote from "../components/home/Quote";
import { ParallaxProvider } from "react-scroll-parallax";
import Start from "../components/home/Start";
import Sticky from "../components/home/Sticky";
import CardsChange from "../components/home/CardsChange";
import Poligon from "../components/home/Poligon";
import Footer from "../components/footer/Footer";

export default function index() {
  return (
    <div>
      <Head>
        <title> Home</title>

        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <div>
        <ParallaxProvider>
          <Home />
          <Quote />
          <Start />
          <Sticky />
          <CardsChange />
          <Poligon />
        </ParallaxProvider>
      </div>
    </div>
  );
}
