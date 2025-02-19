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
            alt=""
            className="w-full object-contain"
          />

          <div className="w-full flex flex-wrap mt-20 ">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="text-black w-1/2 h-[500px] flex flex-col justify-between"
            >
              <p className="text-6xl">{t("elite.title")}</p>
              <p className="text-justify text-lg">{t("elite.subtitle")}</p>
              <div className="flex h-auto items-center gap-5">
                <p className="text-2xl">{t("elite.develop")}</p>
                <ArrowUpRight />
              </div>
            </motion.div>
            <div className="w-1/2">
              <motion.img
                src={eliteImg}
                alt=""
                className="w-full h-[500px] object-contain"
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
