import { CircleCheck } from "lucide-react";
import seo from "../../../assets/seo.jpg";
import circle from "../../../assets/circle.svg";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const Services = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full bg-black py-20">
        <div className="w-11/12 mx-auto text-white">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-center text-lg md:text-5xl uppercase"
          >
            {t("services.title")}
          </motion.h1>
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
            <div className="w-full md:w-2/5">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3, delay: 0.4 }}
                viewport={{ once: true }}
                src={seo}
                alt=""
                className="rounded-lg"
              />
            </div>
            <div className="w-full md:w-2/5 flex flex-col justify-evenly gap-4">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0 }}
                viewport={{ once: true }}
                className="w-full flex justify-between items-center"
              >
                <p className="text-base md:text-2xl">{t("services.item1")}</p>
                <CircleCheck />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
                className="w-full h-px bg-white"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
                className="w-full flex justify-between items-center"
              >
                <p className="text-base md:text-2xl">{t("services.item2")}</p>
                <CircleCheck />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
                className="w-full h-px bg-white"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
                className="w-full flex justify-between items-center"
              >
                <p className="text-base md:text-2xl">{t("services.item3")}</p>
                <CircleCheck />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 1.5 }}
                viewport={{ once: true }}
                className="w-full h-px bg-white"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 1.5 }}
                viewport={{ once: true }}
                className="w-full flex justify-between items-center"
              >
                <p className="text-base md:text-2xl">{t("services.item4")}</p>
                <CircleCheck />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 2 }}
                viewport={{ once: true }}
                className="w-full h-px bg-white"
              ></motion.div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-20">
            <div className="w-full md:w-2/5 -mt-20">
              <motion.img
                animate={{
                  scale: [0.5, 1, 0.9, 0.7, 1],
                  rotate: [0, 90, 180, 270, 360],
                  borderRadius: ["0%", "10%", "50%", "40%", "0%"],
                }}
                transition={{
                  duration: 3,
                  ease: "anticipate",
                  times: [0, 0.25, 0.5, 0.75, 1],
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                }}
                src={circle}
                alt=""
              />
            </div>
            <div className="w-full md:w-2/5 flex flex-col justify-between">
              <ul className="text-5xl leading-16">
                <li>{t("tech.item1")}</li>
                <li>{t("tech.item2")}</li>
                <li>{t("tech.item3")}</li>
                <li>{t("tech.item4")}</li>
              </ul>
              <div className="flex flex-col gap-10 text-white/70 text-justify text-sm  mt-4 md:mt-0">
                <p>{t("tech.subtitle1")}</p>
                <p>{t("tech.subtitle2")}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-8 mt-10">
            <div className="w-full md:w-2/5">
              <p className="text-xl text-center">{t("tech.tools")}</p>
            </div>
            <div className="w-full md:w-2/5 ">
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
