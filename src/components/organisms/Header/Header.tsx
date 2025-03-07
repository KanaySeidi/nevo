import logo from "../../../assets/logo.svg";
import Language from "../../molekules/Language";
import Modal from "../../molekules/Modal";

const Header = () => {
  return (
    <div className="w-full h-20 bg-[#3B3B3B4D] fixed backdrop-blur-md top-0 left-0 z-50">
      <div className="w-11/12 h-full mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex items-center gap-2">
          <Language width={20} />
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default Header;
