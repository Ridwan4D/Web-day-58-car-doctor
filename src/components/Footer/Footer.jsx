import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#151515] text-base-content">
        <aside>
          <img src={logo} alt="" />
          <p className="text-[#E8E8E8]">
            Edwin Diaz is a software and web <br /> technologies engineer, a
            life coach <br />
            trainer who is also a serial .
          </p>
        </aside>
        <nav>
          <h6 className="text-white footer-title">Services</h6>
          <a className="text-[#F3F3F3] link link-hover">Branding</a>
          <a className="text-[#F3F3F3] link link-hover">Design</a>
          <a className="text-[#F3F3F3] link link-hover">Marketing</a>
          <a className="text-[#F3F3F3] link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="text-white footer-title">Company</h6>
          <a className="text-[#F3F3F3] link link-hover">About us</a>
          <a className="text-[#F3F3F3] link link-hover">Contact</a>
          <a className="text-[#F3F3F3] link link-hover">Jobs</a>
          <a className="text-[#F3F3F3] link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="text-white footer-title">Legal</h6>
          <a className="text-[#F3F3F3] link link-hover">Terms of use</a>
          <a className="text-[#F3F3F3] link link-hover">Privacy policy</a>
          <a className="text-[#F3F3F3] link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
