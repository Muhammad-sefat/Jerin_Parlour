import {
  Facebook,
  Instagram,
  Link,
  MapPin,
  Twitter,
  Youtube,
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#f73d7b] text-base-content p-10 w-full">
      <footer className="footer sm:footer-horizontal ">
        <aside>
          <div className="text-white font-bold flex items-center gap-3 font-serif tracking-wide mb-1">
            <Link to={"/"}>
              <img className="w-28" src={logo} alt="logo" />
            </Link>
            <h1 className="text-2xl font-bold">Jerin Parlour</h1>
          </div>
          <p className="flex gap-2">
            <MapPin size={20} />
            H#000 (0th Floor), Road #00,
            <br />
            New DOHS, Mohakhali, Dhaka, Bangladesh
          </p>
        </aside>
        <nav>
          <h6 className="text-xl text-white font-semibold">Company</h6>
          <p className="link link-hover">Branding</p>
          <p className="link link-hover">Design</p>
          <p className="link link-hover">Marketing</p>
          <p className="link link-hover">Advertisement</p>
        </nav>
        <nav>
          <h6 className="text-xl text-white font-semibold">Quick Links</h6>
          <p className="link link-hover">Quick Link</p>
          <p className="link link-hover">Contact</p>
          <p className="link link-hover">Jobs</p>
          <p className="link link-hover">Press kit</p>
        </nav>
        <nav>
          <h6 className="text-xl text-white font-semibold">About Us</h6>
          <p className="link link-hover">Terms of use</p>
          <p className="link link-hover">Privacy policy</p>
          <p className="link link-hover">Cookie policy</p>
          <div className="flex items-center gap-2 text-white mt-3">
            <Facebook size={20} />
            <Twitter size={20} />
            <Instagram size={20} />
            <Youtube />
          </div>
        </nav>
      </footer>
      <div className="border-t mt-6  pt-[20px] flex items-center w-full flex-wrap gap-[20px] justify-center">
        <p className="text-[0.8rem] sm:text-[0.9rem]">
          © 2025 Jerin Parlour. All Rights Reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
