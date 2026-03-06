import { ChevronRight, PlayCircleIcon, Search } from "lucide-react";
import { useGetProductById } from "../hooks/getProduct";

const Hero = () => {
  const [data] = useGetProductById("frntrchc1");

  return (
    <div className="flex flex-col md:flex-row md:items-center md:h-screen">
      <div className="justify-center w-full md:w-3/5 px-4 md:px-0 pt-30 pb-10 md:pt-0">
        <h1 className="w-full md:w-3/4 text-5xl text-center md:text-left md:text-7xl font-bold mx-auto mb-10">
          The kind of <div className="text-[#553B33]">furniture</div> you have
          been looking for
        </h1>
        <div className="w-full md:w-3/4 flex flex-wrap gap-4 mx-auto">
          <a
            href=""
            className="w-full md:w-fit justify-center p-4 gap-3 flex items-center bg-[#E5F0B6] text-[#553B33] rounded-md"
          >
            <Search className="w-6 h-6" /> SEARCH CATALOG
          </a>
          <a
            href=""
            className="w-full md:w-fit justify-center p-4 gap-3 flex items-center border border-[#553B33] text-[#553B33] rounded-md"
          >
            <PlayCircleIcon className="w-6 h-6" /> WATCH VIDEOS
          </a>
        </div>
      </div>
      <div
        className={`w-full md:w-2/5 h-[300px] md:h-auto md:self-stretch bg-[url(${data?.img_link ? data.img_link : ""})] bg-cover bg-center`}
        style={{
          backgroundImage: data?.img_link ? `url(${data.img_link})` : undefined,
        }}
      >
        <div className="w-full flex flex-col justify-between md:justify-end h-full p-4 md:p-10">
          <h6 className="text-sm md:text-lg text-white flex md:hidden">
            HIGHLIGHTED PRODUCT
          </h6>
          <div className="flex flex-col gap-4">
            <div className="flex w-fit rounded-md text-sm md:text-md bg-white/70 p-3">
              {data?.price
                ? new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  }).format(data.price)
                : ""}
            </div>
            <h1 className="text-2xl md:text-5xl text-white">
              {data?.name ? data.name : ""}
            </h1>
            <a
              href=""
              className="flex gap-4 w-fit rounded-md bg-[#2F241F] text-white px-6 py-3 text-sm md:text-lg"
            >
              View Details <ChevronRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
