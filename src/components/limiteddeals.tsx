import { Mail } from "lucide-react";

const LimitedDeals = () => {
  return (
    <div className="flex flex-col gap-5 bg-[#FCFAFA] px-4 md:px-20 py-10">
      <h6 className="text-md md:text-lg text-center md:text-left text-[#2F241F]">
        LIMITED DEALS
      </h6>
      <h1 className="text-2xl md:text-7xl text-center md:text-left text-[#2F241F] font-bold">
        Become a member and get 10% off of your first purchase
      </h1>
      <div className="flex w-full md:w-1/2 shadow-md rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Enter your email here"
          className="w-full p-4 bg-[#FCFAFA] outline-none"
        />
        <button className="p-4 bg-[#E5F0B6] text-[#2F241F]">
          <Mail className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default LimitedDeals;
