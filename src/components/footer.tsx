const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between px-4 md:px-20 py-10 gap-10 md:gap-0">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-between gap-10">
        <div className="flex flex-col items-center md:items-start gap-6">
          <img src="/logo.png" alt="logo" className="w-30" />
          <p className="text-sm text-[#667085] w-full md:w-5/6 leading-relaxed text-center md:text-left">
            Dekoor is a furniture company created to fulfill the needs of family
            with aesthetic feeling in their furniture. Always pay attention to
            details and give clear communication for the customers. Priority of
            our design is comfortability.
          </p>
        </div>
        <span className="text-sm text-[#667085] text-center md:text-left w-full md:w-auto mt-4 md:mt-0">
          ©Copyright 2022 Dekoor
        </span>
      </div>
      <div className="w-full md:w-1/2 grid grid-cols-2 md:flex md:justify-between gap-y-10 md:gap-0 mt-4 md:mt-0">
        <div className="flex flex-col items-center md:items-start justify-between w-full md:w-fit gap-4 md:gap-0">
          <h6 className="text-md font-semibold text-[#2F241F] mb-1 md:mb-0">
            Support
          </h6>
          <a href="#" className="text-sm text-[#667085]">
            FAQ
          </a>
          <a href="#" className="text-sm text-[#667085]">
            Shipping & Returns
          </a>
          <a href="#" className="text-sm text-[#667085]">
            Care guide
          </a>
          <a href="#" className="text-sm text-[#667085]">
            Redeem warranty
          </a>
        </div>
        <div className="flex flex-col items-center md:items-start justify-between w-full md:w-fit gap-4 md:gap-0">
          <h6 className="text-md font-semibold text-[#2F241F] mb-1 md:mb-0">
            Social Media
          </h6>
          <a href="#" className="text-sm text-[#667085]">
            Instagram
          </a>
          <a href="#" className="text-sm text-[#667085]">
            Facebook
          </a>
          <a href="#" className="text-sm text-[#667085]">
            Twitter
          </a>
          <a href="#" className="text-sm text-[#667085]">
            TikTok
          </a>
        </div>
        <div className="flex flex-col items-center md:items-start justify-between w-full md:w-fit gap-4 md:gap-0 col-span-2 md:col-span-1">
          <h6 className="text-md font-semibold text-[#2F241F] mb-1 md:mb-0">
            About Us
          </h6>
          <a href="#" className="text-sm text-[#667085]">
            Our story
          </a>
          <a href="#" className="text-sm text-[#667085]">
            Designer
          </a>
          <a href="#" className="text-sm text-[#667085]">
            Craftmanship
          </a>
          <a href="#" className="text-sm text-[#667085]">
            Sustainability
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
