import darklogo from "../../../assets/logoDark.svg";
import tg from "../../../assets/tg.svg";
import ig from "../../../assets/ig.svg";
import tt from "../../../assets/tt.svg";
import wa from "../../../assets/wa.svg";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full bg-white rounded-t-2xl py-10 mb-20">
        <div className="w-11/12 mx-auto h-full flex justify-center items-center">
          <div className="w-full h-52 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
            <div className="w-full md:w-2/5 h-full flex flex-col gap-5">
              <img src={darklogo} alt="" className="size-30" />
              <p>{t("footer.title")}</p>
              <div className="flex w-full gap-10 md:gap-20 mt-5">
                <motion.img
                  src={tg}
                  alt=""
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                />
                <motion.img
                  src={wa}
                  alt=""
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                />
                <motion.img
                  src={ig}
                  alt=""
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                />
                <motion.img
                  src={tt}
                  alt=""
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-2xl text-gray-400">{t("footer.page")}</p>
              <p>{t("footer.page1")}</p>
              <p>{t("footer.page2")}</p>
              <p>{t("footer.page3")}</p>
              <p>{t("footer.page4")}</p>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-2xl text-gray-400">{t("footer.info")}</p>
              <p>{t("footer.info1")}</p>
              <p>{t("footer.info2")}</p>
              <p>{t("footer.info3")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
