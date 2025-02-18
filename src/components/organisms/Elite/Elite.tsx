import elite from "../../../assets/elite.png";
import eliteImg from "../../../assets/elitImg.jpg";

const Elite = () => {
  return (
    <>
      <div className="w-full h-auto bg-white">
        <div className="w-11/12 mx-auto py-20">
          <img src={elite} alt="" className="w-full object-contain" />

          <div className="w-full flex flex-wrap mt-20 ">
            <div className="text-black w-1/2 h-[500px] flex flex-col justify-between">
              <p className="text-6xl">
                Технологии, которые превращают бизнес в Бренд
              </p>
              <p className="text-justify text-lg">
                Мы создаем цифровые решения, которые делают бизнес умнее,
                процессы — эффективнее, а клиентов — ближе. От разработки сайтов
                и онлайн-магазинов до автоматизации и оптимизации — мы
                превращаем технологии в ваш конкурентный успех.
              </p>
              <div className="flex h-auto items-center gap-5">
                <p className="text-2xl">Мы разрабатываем мощные веб-продукты</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#252525"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-up-right"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </div>
            <div className="w-1/2">
              <img
                src={eliteImg}
                alt=""
                className="w-full h-[500px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Elite;
