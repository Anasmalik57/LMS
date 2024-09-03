import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import aboutMain from "../Assets/Images/about-main.png";
import apj from "../Assets/Images/famousPersonality/apj.png";
import billGates from "../Assets/Images/famousPersonality/billGates.png";
import nelsonMandela from "../Assets/Images/famousPersonality/nelsonMandela.png";
import steveJobs from "../Assets/Images/famousPersonality/steveJobs.png";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white ">
        <div className="flex items-center gap-5 mx-10 justify-center">
          <section className="w-1/2 space-y-10 ">
            <h1 className="text-5xl text-yellow-500 font-semibold ">
              Affordable and Quality Education
            </h1>
            <p className="text-xl text-gray-200 ">
              Our goal is to provide the affordable and quality education to the
              world. We are providing the platform for the aspiring teachers and
              students to share their skills, creativity and knowledge to each
              other to empower and contribute in the growth and wellness of
              mankind.
            </p>
          </section>
          <div className="w-1/2">
            <img
              src={aboutMain}
              alt="about-Main-Image"
              className="drop-shadow-2xl  "
              id="test1"
              style={{
                filter: "drop-shadow(0px, 10px, 10px rgb(0, 0, 0) )",
              }}
            />
          </div>
        </div>
        {/* Crousel */}
        <div className="carousel w-1/2 my-16 m-auto  ">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex  items-center justify-center gap-8 px-[15%] ">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <div className="flex flex-col justify-center items-center">
                <img src={apj} className="w-40 h-40 rounded-full border-2 border-gray-700" />
                <q className="text-[1rem] leading-snug  text-gray-200 text-center max-w-[21rem] tracking-wider">
                  {"Education is the most important element for growth and prosperity of a nation"}
                  </q>
                <h1 className="text-xl font-semibold tracking-widest font-mono text-violet-600 pt-2">
                  APJ Abdul Kalaam
                </h1>
              </div>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex  items-center justify-center gap-8 px-[15%] ">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <div className="flex flex-col justify-center items-center">
                <img src={steveJobs} className="w-40 h-40 rounded-full border-2 border-gray-700" />
                <q className="text-[1rem] leading-snug  text-gray-200 text-center max-w-[20rem] tracking-wider">
                  {" Don't educate your children to be rich. Educate them to be happy"}
                </q>
                <h1 className="text-xl font-semibold tracking-widest font-mono text-violet-600 pt-2">
                  Steve Jobs
                </h1>
              </div>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex  items-center justify-center gap-8 px-[15%] ">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <div className="flex flex-col justify-center items-center">
                <img src={nelsonMandela} className="w-40 h-40 rounded-full border-2 border-gray-700" />
                <q className="text-[1rem] leading-snug  text-gray-200 text-center max-w-[20rem] tracking-wider">
                  {"Education is the most powerful weapon which you can use to change the world"}
                </q>
                <h1 className="text-xl font-semibold tracking-widest font-mono text-violet-600 pt-2">Nelson Mandela</h1>
              </div>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex  items-center justify-center gap-8 px-[15%] ">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <div className="flex flex-col justify-center items-center">
                <img src={billGates} className="w-40 h-40 rounded-full border-2 border-gray-700" />
                <q className="text-[1rem] leading-snug  text-gray-200 text-center max-w-[20rem] tracking-wider">
                  {"Education is the most powerful weapon which you can use to change the world"}
                </q>
                <h1 className="text-xl font-semibold tracking-widest font-mono text-violet-600 pt-2">Bill Gates</h1>
              </div>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
