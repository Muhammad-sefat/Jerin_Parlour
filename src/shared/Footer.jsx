const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#F63E7B] text-base-content p-10 w-full fixed bottom-0">
      <aside>
        <p>
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
      </nav>
    </footer>
  );
};

export default Footer;
