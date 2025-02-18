import { useEffect, useState } from "react";
import banner from "../../../assets/banner.svg";
import Arrow from "../../atoms/Arrow";
import { motion } from "motion/react";

interface Square {
  id: number;
  left: number;
  top: number;
}

const Banner = () => {
  const [squares, setSquares] = useState<Square[]>([]);

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
      const timer = setTimeout(() => {
        setSquares((prev) => prev.filter((s) => s.id !== square.id));
        console.log(timer);
      }, 5000);
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
            animate={{ opacity: 1, scale: 1 }}
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
        <div className="text-white">
          <p className="text-7xl mb-10">
            NEVODEVS - создаём технологии сегодня, <br /> что бы вы лидировали
            завтра
          </p>
        </div>
        <div className="w-full h-32 flex justify-between">
          <div className="w-1/2 h-full text-white">
            <p className="text-xl">
              Мы разрабатываем сайты, онлайн-магазины и автоматизируем процессы,
              чтобы минимизировать ручной труд и увеличить вашу прибыль.
              Технологии, которые работают на вас – сегодня и в будущем.
            </p>
          </div>
          <div className="h-full flex items-center gap-5 mb-10">
            <div className="flex items-center ">
              <div className="w-[600px] border-b border-white "></div>
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            <div className="">
              <button className="w-56 h-14 flex items-center gap-2 justify-center border-red-300 text-white border rounded-4xl  px-4 py-2 ">
                Наши кейсы
                <Arrow width={10} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
