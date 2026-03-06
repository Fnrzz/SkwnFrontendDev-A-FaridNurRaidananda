import { Briefcase, SearchIcon } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col gap-10 bg-[#2F241F] px-4 md:px-20 py-10">
      <h6 className="text-md md:text-lg text-center md:text-left text-[#E5F0B6]">
        WHY CHOOSE US?
      </h6>
      <h1 className="text-2xl md:text-7xl text-center md:text-left text-[#E5F0B6] font-bold">
        We care about details and the quality of our products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 shrink-0 flex justify-center items-center bg-[#E5F0B6]/50 rounded-md">
            <SearchIcon className="w-5 h-5 text-[#E5F0B6]" />
          </div>
          <h6 className="text-lg md:text-2xl text-[#E5F0B6]">
            MANUFACTURED WITH QUALITY MATERIALS
          </h6>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 shrink-0 flex justify-center items-center bg-[#E5F0B6]/50 text-[#E5F0B6] text-lg rounded-md">
            5
          </div>
          <h6 className="text-lg md:text-2xl text-[#E5F0B6]">
            5 YEARS OF WARRANTY FOR EACH PRODUCT
          </h6>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 shrink-0 flex justify-center items-center bg-[#E5F0B6]/50 rounded-md">
            <Briefcase className="w-5 h-5 text-[#E5F0B6]" />
          </div>
          <h6 className="text-lg md:text-2xl text-[#E5F0B6]">
            20 YEARS OF EXPERTISE
          </h6>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
