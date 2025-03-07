import { useTranslation } from "react-i18next";
import elite from "../../../assets/elite.png";
import eliteImg from "../../../assets/elitImg.jpg";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const Elite = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full h-auto bg-white">
        <div className="w-11/12 mx-auto py-20">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
            src={elite}
            alt="Элит академи"
            className="w-full object-contain"
          />

          <div className="w-full  flex flex-col md:flex-row mt-4 md:mt-20 gap-2">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="text-black w-full h-[300px]  md:w-1/2 flex flex-col justify-between gap-10 md:gap-5"
            >
              <p className="text-xl md:text-6xl font-medium">
                {t("elite.title")}
              </p>
              <p className="text-justify text-base md:text-lg">
                {t("elite.subtitle")}
              </p>
              <div className="flex h-auto items-center gap-5">
                <p className="text-base md:text-2xl">{t("elite.develop")}</p>
                <ArrowUpRight />
              </div>
            </motion.div>
            <div className="w-full md:w-1/2 h-[500px]">
              <motion.img
                src={eliteImg}
                alt="laptop"
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Elite;
