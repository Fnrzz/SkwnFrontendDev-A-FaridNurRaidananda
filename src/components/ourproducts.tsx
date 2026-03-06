import { useState } from "react";
import { useGetProducts } from "../hooks/getProduct";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OurProducts = () => {
  const [data] = useGetProducts();

  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    if (!data) return;
    setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (!data) return;
    setActiveIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#2F241F] py-10 md:py-20 overflow-hidden">
      <div className="flex justify-between items-center px-4 md:px-20 mb-10 gap-6">
        <div className="flex flex-col gap-2 md:gap-5">
          <h6 className="text-sm md:text-lg text-[#E5F0B6]">OUR PRODUCTS</h6>
          <h3 className="text-xl md:text-7xl font-bold text-[#E5F0B6]">
            This month’s best seller
          </h3>
        </div>
        <a
          href="#"
          className="bg-[#E5F0B6] w-fit px-4 py-2 md:py-3 md:px-8 text-[#553B33] font-bold rounded-lg text-sm md:text-lg"
        >
          SEE MORE
        </a>
      </div>

      <div className="relative w-full pl-0 md:pl-20 h-[400px] md:h-[480px]">
        <div
          className="flex items-start h-full gap-4 md:gap-6 transition-transform duration-500 ease-out [--slide-step:266px] md:[--slide-step:304px] [--offset:calc(50vw-140px)] md:[--offset:var(--slide-step)]"
          style={{
            transform: `translateX(calc(var(--offset) - (${activeIndex} * var(--slide-step))))`,
          }}
        >
          {data?.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 ease-out flex-shrink-0 ${
                  isActive
                    ? "w-[280px] md:w-[340px] h-full shadow-2xl"
                    : "w-[250px] md:w-[280px] h-[320px] md:h-[380px] opacity-60 hover:opacity-100 scale-95"
                }`}
              >
                <img
                  src={item.img_link}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#2F241F]/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 transition-opacity duration-500 delay-100 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="w-fit bg-white/90 px-4 py-2 rounded-lg text-[#553B33] font-bold text-sm md:text-md mb-3">
                    {item?.price
                      ? new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                        }).format(item.price)
                      : ""}
                  </div>
                  <h3 className="text-xl md:text-4xl font-bold text-white drop-shadow-md">
                    {item.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 z-10 md:hidden pointer-events-none">
          <button
            onClick={handlePrev}
            className="h-fit p-3 rounded-full bg-[#E5F0B6] text-[#553B33]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="h-fit p-3 rounded-full bg-[#E5F0B6] text-[#553B33]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="hidden md:flex justify-end gap-5 px-4 md:px-20 mt-12">
        <button
          onClick={handlePrev}
          className="h-fit p-4 rounded-full bg-[#E5F0B6] text-[#553B33]"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="h-fit p-4 rounded-full bg-[#E5F0B6] text-[#553B33]"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
