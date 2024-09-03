import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import aboutMain from "../Assets/Images/about-main.png";
import CarouselSlide from "../Components/CarouselSlide";
import { celebrities } from "../constants/celebrityData";

function AboutUs() {

  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10 justify-center">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and Quality Education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide affordable and quality education to the
              world. We are providing a platform for aspiring teachers and
              students to share their skills, creativity, and knowledge to
              empower and contribute to the growth and wellness of mankind.
            </p>
          </section>
          <div className="w-1/2">
            <img
              src={aboutMain}
              alt="about-Main-Image"
              className="drop-shadow-2xl"
              id="test1"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0, 0, 0))",
              }}
            />
          </div>
        </div>
        {/* Carousel */}
        <div className="carousel w-1/2 my-16 m-auto">
          {celebrities &&
            celebrities.map((celebrity) => (
              <CarouselSlide
                {...celebrity}
                key={celebrity.slideNumber}
                totalslides={celebrities.length}
              />
            ))}
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
