import { useEffect, useState } from "react";
import banner from "../../../assets/banner.svg";
import Arrow from "../../atoms/Arrow";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

interface Square {
  id: number;
  left: number;
  top: number;
}

const Banner = () => {
  const [squares, setSquares] = useState<Square[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setSquares((prevSquares) => {
        if (prevSquares.length >= 6) return prevSquares;
        const newSquare: Square = {
          id: Date.now(),
          left: Math.random() * 90,
          top: Math.random() * 90,
        };
        return [...prevSquares, newSquare];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    squares.forEach((square) => {
      setTimeout(() => {
        setSquares((prev) => prev.filter((s) => s.id !== square.id));
      }, 8000);
    });
  }, [squares]);

  return (
    <div className="w-full h-auto  bg-[#1C1C1C] pb-20">
      <div className="w-11/12 h-full mx-auto">
        <div className="w-full h-full flex justify-center -mt-10 ">
          <motion.img
            src={banner}
            alt=""
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 0.8 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          />
          {squares.map((square) => (
            <div
              key={square.id}
              className="absolute w-20 h-20 bg-white/60  backdrop-blur-md rounded-2xl 
                     fade-and-grow transition duration-1000"
              style={{
                left: `${square.left}%`,
                top: `${square.top}%`,
              }}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <p className="text-2xl md:text-4xl lg:text-7xl mb-10">
            {t("banner.title")}
          </p>
        </motion.div>
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center  gap-8 md:gap-0 mt-5 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 h-full text-white"
          >
            <p className="text-base md:text-base lg:text-lg text-justify">
              {t("banner.subtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="flex items-center justify-end w-full md:w-1/3 h-0.5 bg-white"
          >
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="w-auto h-14 flex items-center justify-center border-red-300 text-white border rounded-4xl  px-6 py-3 "
          >
            <p>{t("banner.cases")}</p>
            <Arrow width={20} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
