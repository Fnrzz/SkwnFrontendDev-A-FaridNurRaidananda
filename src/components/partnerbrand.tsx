const PartnerBrand = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#FCFAFA] px-4 md:px-20 py-10 md:py-20 gap-5 ">
      <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
        <h3 className="text-3xl md:text-8xl font-bold">25+</h3>
        <h6 className="text-md md:text-2xl text-[#2F241F]">PARTNERED BRANDS</h6>
      </div>
      <div className="w-full md:w-2/3 flex justify-between">
        <img
          src="/gusto.png"
          alt="gusto"
          className="w-15 md:w-30 object-contain"
        />
        <img
          src="/stripe.png"
          alt="gusto"
          className="w-15 md:w-30 object-contain"
        />
        <img
          src="/treehouse.png"
          alt="gusto"
          className="w-15 md:w-30 object-contain"
        />
        <img
          src="/upwork.png"
          alt="gusto"
          className="w-15 md:w-30 object-contain"
        />
      </div>
    </div>
  );
};

export default PartnerBrand;
