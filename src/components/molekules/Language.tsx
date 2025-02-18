import languageIcon from "../../assets/languageIcon.svg";
const Language = ({ width }: { width: number }) => {
  return (
    <div>
      <div className="w-full flex gap-2">
        <img src={languageIcon} alt="language icon" width={width} />
        <div className="flex space-x-4 items-center text-white">
          <select name="language" id="language-select ">
            <option className="text-black" value="ru">
              RU
            </option>
            <option className="text-black" value="en">
              EN
            </option>
            <option className="text-black" value="kg">
              KG
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Language;
