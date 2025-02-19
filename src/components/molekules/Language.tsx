import { useTranslation } from "react-i18next";
import languageIcon from "../../assets/languageIcon.svg";
import { languages } from "../../utils/language";

const Language = ({ width }: { width: number }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || "en";

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
      localStorage.setItem("language", selectedLanguage);
    } else {
      console.error("Ошибка: язык не определён");
    }
  };

  return (
    <div>
      <div className="w-full flex gap-2">
        <img src={languageIcon} alt="language icon" width={width} />
        <div className="flex space-x-4 items-center text-white">
          <select
            name="language"
            id="language-select"
            className="text-white focus:outline-none outline-none"
            value={currentLanguage}
            onChange={changeLanguage}
          >
            {languages.map(({ title, key }) => (
              <option
                key={key}
                className="text-black focus:outline-none outline-none"
                value={key}
              >
                {title.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Language;
