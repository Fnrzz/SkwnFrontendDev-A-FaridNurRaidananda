import { useState } from "react";
import { useGetProductsByType } from "../hooks/getProduct";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>("Chair");
  const [isOpenImage, setIsOpenImage] = useState<number>(1);

  const categories = [
    {
      name: "Chair",
      desc: "Enjoy a great living room aesthetics with your family  Designs created for increased comfortability",
    },
    {
      name: "Couch",
      desc: "Enjoy a great living room aesthetics with your family  Designs created for increased comfortability",
    },
    {
      name: "Decoration",
      desc: "Enjoy a great living room aesthetics with your family  Designs created for increased comfortability",
    },
    {
      name: "Lamp",
      desc: "Enjoy a great living room aesthetics with your family  Designs created for increased comfortability",
    },
  ];

  const [data] = useGetProductsByType(activeCategory?.toLowerCase());
  const images = data && data.map((item) => item.img_link);

  const handleToggle = (name: string) => {
    setActiveCategory(activeCategory === name ? null : name);
    setIsOpenImage(1);
  };

  const handleOpenImage = (index: number) => {
    setIsOpenImage(index);
  };

  return (
    <div className="flex flex-col-reverse  md:flex-row px-4 md:px-0 py-10 gap-10 md:gap-0">
      <div className="w-full md:w-3/5 flex gap-4 h-[200px] md:h-[500px]">
        {images &&
          images.map((image, index) => {
            const isOpen = index === isOpenImage;
            return (
              <div
                key={index}
                onClick={() => handleOpenImage(index)}
                className={`h-full transition-all duration-700  rounded-2xl ease-in-out overflow-hidden ${
                  isOpen ? "w-full" : "w-24"
                }`}
              >
                <img
                  src={image}
                  alt={`Image ${index}`}
                  className={`w-full h-full object-cover object-center`}
                />
              </div>
            );
          })}
      </div>
      <div className="w-full md:w-2/5">
        <div className="w-3/4 flex flex-col mx-auto gap-4">
          <h6 className="text-md text-center md:text-left">Categories</h6>
          <h3 className="text-3xl font-bold text-center md:text-left">
            Furniture Sets Recommendations
          </h3>
          <div className="bg-[#FCFAFA] rounded-xl overflow-hidden">
            {categories.map((category, index) => {
              const isOpen = activeCategory === category.name;

              return (
                <div
                  key={category.name}
                  className={`p-4 transition-all duration-300 ${
                    isOpen ? "bg-[#E5F0B6]" : "bg-transparent"
                  } ${index !== categories.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <button
                    onClick={() => handleToggle(category.name)}
                    className="w-full text-left mb-2 text-lg font-bold flex justify-between items-center"
                  >
                    {category.name}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm pb-2">{category.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
