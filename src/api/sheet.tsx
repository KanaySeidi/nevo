import axios from "axios";

const API = import.meta.env.VITE_API_URL as string;

export interface FormDataType {
  fullName: string;
  email: string;
  phone: string;
}

export const sendInfo = async (data: FormDataType): Promise<string> => {
  try {
    await axios.post(API, { data });
    return "Данные отправлены";
  } catch (error) {
    console.log("Ошибка ", error);
    return "Ошибка при отправке данных";
  }
};
