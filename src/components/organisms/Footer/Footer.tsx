import darklogo from "../../../assets/logoDark.svg";
import tg from "../../../assets/tg.svg";
import ig from "../../../assets/ig.svg";
import tt from "../../../assets/tt.svg";
import wa from "../../../assets/wa.svg";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-96 bg-white rounded-t-2xl">
        <div className="w-11/12 mx-auto h-full flex justify-center items-center">
          <div className="w-full h-52 flex justify-between">
            <div className="w-2/5 h-full flex flex-col gap-5">
              <img src={darklogo} alt="" className="size-30" />
              <p>
                Nevo — движущая сила цифровых трансформаций. Мы создаём
                эффективные решения, развиваем технологии, поддерживаем рост
                бизнеса и воплощаем идеи в реальность
              </p>
              <div className="flex gap-2">
                <motion.img
                  src={tg}
                  alt=""
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                  }}
                  whileTap={{ scale: 10 }}
                />
                <img src={wa} alt="" />
                <img src={ig} alt="" />
                <img src={tt} alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-2xl text-gray-400">Страницы</p>
              <p>Главная</p>
              <p>О Компани</p>
              <p>Услуги</p>
              <p>Контакты</p>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-2xl text-gray-400">Полезная информация</p>
              <p>FAQ</p>
              <p>Оплата</p>
              <p>Наши контакты</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
