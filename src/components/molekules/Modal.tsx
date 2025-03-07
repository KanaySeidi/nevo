import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { sendInfo } from "../../api/sheet";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    await sendInfo(formData);
    setLoading(false);
    close();
    setFormData({ fullName: "", email: "", phone: "" });
  };

  const isFormInvalid = useMemo(() => {
    return Object.values(formData).some((value) => !value);
  }, [formData]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!validateEmail(e.target.value)) {
      return "Некорректный email!";
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        onClick={open}
        className="bg-blue-500 w-auto h-10 px-5 text-white rounded-3xl bg-gradient-to-r from-[#BB4642] to-[#A22976] flex justify-center items-center gap-2 text-xs md:text-base"
      >
        {t("request")}
        <ArrowUpRight />
      </motion.button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                {t("modal.title")}
              </DialogTitle>

              <div className="flex flex-col gap-2 mt-5">
                <input
                  type="text"
                  name="fullName"
                  placeholder={t("modal.fullName")}
                  className="bg-white/30 rounded-lg p-2 focus:outline-none"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <input
                  name="phone"
                  placeholder={t("modal.phone")}
                  className="bg-white/30 rounded-lg p-2 focus:outline-none"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("modal.email")}
                  className="bg-white/30 rounded-lg p-2 focus:outline-none"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
              </div>

              <div className="mt-4">
                <Button
                  className={`inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none 
                    ${
                      loading || isFormInvalid
                        ? "bg-gray-400 cursor-not-allowed opacity-50"
                        : "bg-gray-700 data-[hover]:bg-gray-600"
                    }`}
                  onClick={handleSubmit}
                  disabled={loading || isFormInvalid}
                >
                  {loading ? t("modal.sending") : t("modal.send")}
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
