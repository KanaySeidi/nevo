import { useTranslation } from "react-i18next";
import logo from "../../../assets/logo.svg";
import Arrow from "../../atoms/Arrow";
import Language from "../../molekules/Language";
import { motion } from "motion/react";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-20 bg-[#3B3B3B4D] fixed backdrop-blur-md top-0 left-0 z-50">
      <div className="w-11/12 h-full mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex items-center gap-2">
          <Language width={20} />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="bg-blue-500 w-auto h-10 px-5 text-white rounded-3xl bg-gradient-to-r from-[#BB4642] to-[#A22976] flex justify-center items-center gap-2"
          >
            {t("request")}
            <Arrow width={10} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Header;
