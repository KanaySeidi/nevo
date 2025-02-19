import { CircleCheck } from "lucide-react";
import seo from "../../../assets/seo.jpg";
import circle from "../../../assets/circle.svg";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full bg-black py-20">
        <div className="w-11/12 mx-auto text-white">
          <h1 className="text-center  text-5xl uppercase">
            {t("services.title")}
          </h1>
          <div className="flex justify-center gap-8 mt-10">
            <div className="w-2/5">
              <img src={seo} alt="" className="rounded-lg" />
            </div>
            <div className="w-2/5 flex flex-col justify-evenly">
              <div className="w-full flex justify-between items-center">
                <p className="text-2xl">{t("services.item1")}</p>
                <CircleCheck />
              </div>
              <div className="w-full h-px bg-white"></div>
              <div className="w-full flex justify-between items-center">
                <p className="text-2xl">{t("services.item2")}</p>
                <CircleCheck />
              </div>
              <div className="w-full h-px bg-white"></div>

              <div className="w-full flex justify-between items-center">
                <p className="text-2xl">{t("services.item3")}</p>
                <CircleCheck />
              </div>
              <div className="w-full h-px bg-white"></div>

              <div className="w-full flex justify-between items-center">
                <p className="text-2xl">{t("services.item4")}</p>
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
                <li>{t("tech.item1")}</li>
                <li>{t("tech.item2")}</li>
                <li>{t("tech.item3")}</li>
                <li>{t("tech.item4")}</li>
              </ul>
              <div className="flex flex-col gap-10 text-white/70 text-justify text-sm">
                <p>{t("tech.subtitle1")}</p>
                <p>{t("tech.subtitle2")}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-8 mt-10">
            <div className="w-2/5">
              <p className="text-xl text-center">{t("tech.tools")}</p>
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
