import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const currentDate = new Date();
const year = currentDate.getFullYear();

function Footer() {
  return (
    <>
      <footer className="absolute left-0 bottom-auto h-[10vh] w-full flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 py-5 sm:px-20 ">
        {/* Copyright */}
        <section className="text-lg">
          Copyright {year} | All rights reserved
        </section>
        {/* Icons */}
        <section className="flex justify-center items-center gap-5 text-2xl text-white ">
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300 ">
            <BsFacebook />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300 ">
            <BsInstagram />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300 ">
            <BsLinkedin />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300 ">
            <BsTwitter />
          </a>
        </section>
      </footer>
    </>
  );
}

export default Footer;
