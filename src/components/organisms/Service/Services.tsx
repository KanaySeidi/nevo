import { CircleCheck } from "lucide-react";
import seo from "../../../assets/seo.jpg";
import circle from "../../../assets/circle.svg";

const Services = () => {
  return (
    <>
      <div className="w-full bg-black py-20">
        <div className="w-11/12 mx-auto text-white">
          <h1 className="text-center  text-5xl uppercase">
            Услуги которые мы вам <br /> предоставляем
          </h1>
          <div className="flex justify-center gap-8 mt-10">
            <div className="w-2/5">
              <img src={seo} alt="" className="rounded-lg" />
            </div>
            <div className="w-2/5 flex flex-col justify-evenly">
              <div className="w-full flex justify-between items-center">
                <p className="text-2xl">Одностраничные сайты (Landing Page)</p>
                <CircleCheck />
              </div>
              <div className="w-full h-px bg-white"></div>
              <div className="w-full flex justify-between items-center">
                <p className="text-2xl">Интернет Магазины (E-Commerce)</p>
                <CircleCheck />
              </div>
              <div className="w-full h-px bg-white"></div>

              <div className="w-full flex justify-between items-center">
                <p className="text-2xl">Корпоративные сайты</p>
                <CircleCheck />
              </div>
              <div className="w-full h-px bg-white"></div>

              <div className="w-full flex justify-between items-center">
                <p className="text-2xl">SEO Оптимизация</p>
                <CircleCheck />
              </div>
              <div className="w-full h-px bg-white"></div>
            </div>
          </div>
          <div className="flex justify-center gap-8 mt-20">
            <div className="w-2/5 -mt-20">
              <img src={circle} alt="" />
            </div>
            <div className="w-2/5 flex flex-col justify-between">
              <ul className="text-5xl leading-16">
                <li>Создаём. </li>
                <li>Развиваем.</li>
                <li>Поддерживаем.</li>
                <li>Воплощаем.</li>
              </ul>
              <div className="flex flex-col gap-10 text-white/70 text-justify text-sm">
                <p>
                  Мы помогаем трансформировать систему планирования,
                  организационные процессы, инфраструктуру, а также
                  коммуникационные и материальные ресурсы.
                </p>
                <p>
                  Наша цель — сделать так, чтобы ваша компания уверенно росла и
                  адаптировалась в цифровой среде.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-8 mt-10">
            <div className="w-2/5">
              <p className="text-xl text-center">Технологии и инструменты:</p>
            </div>
            <div className="w-2/5 ">
              <div className="flex gap-10">
                <p>
                  php / Node.js / Html5 / React / Sketch / Figma / Bootstrap /
                  Css3
                </p>
                <p>Django / Python / Vue.js / JavaScript / Trello / ClickUp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
