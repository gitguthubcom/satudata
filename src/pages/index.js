


import GalleryOne from "@/components/GalleryOne/GalleryOne";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import NewsOne from "@/components/NewsOne/NewsOne";
import VideoTwo from "@/components/VideoTwo/VideoTwo";
import CounterOne from "@/components/CounterOne/CounterOne";
import PopularTours from "@/components/PopularTours/PopularTours";

import TourSearch from "@/components/TourSearch/TourSearch";

import WhyChoose from "@/components/WhyChoose/WhyChoose";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Satu Data">
      <MainSlider />
      <TourSearch />
      <NewsOne />
      <PopularTours />
      <VideoTwo />
      <CounterOne />
      
    
      

      <GalleryOne />
      <WhyChoose />
    </Layout>
  );
};

export default Home;
