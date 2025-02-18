import seo from "../../../assets/seo.jpg";
import Arrow from "../../atoms/Arrow";

const Case = () => {
  return (
    <>
      <div className="w-full py-20 bg-black">
        <div className="w-11/12 mx-auto text-white">
          <h1 className="text-4xl uppercase">
            Ознакомьтесь с КЕЙСАМИ работ <br /> нашей студии IT Разработки
          </h1>
          <div className="w-full flex justify-center gap-10 mt-10">
            <div className="w-2/5">
              <img src={seo} alt="" />
            </div>
            <div className="w-2/5 flex flex-col justify-between">
              <div className="flex w-full justify-between">
                <img src={seo} alt="" className="w-2/5" />
                <img src={seo} alt="" className="w-2/5" />
              </div>
              <div>
                <p>
                  Мы разрабатываем мощные веб-продукты, помогаем компаниям расти
                  и автоматизировать процессы. От идеи до результата — всё под
                  ключ.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-white/60 my-28"></div>
          <div className="w-full flex justify-center gap-10">
            <div className="w-2/5">
              <img src={seo} alt="" />
            </div>
            <div className="w-2/5 flex flex-col justify-between">
              <div className="flex w-full justify-between">
                <img src={seo} alt="" className="w-2/5" />
                <img src={seo} alt="" className="w-2/5" />
              </div>
              <div>
                <p>
                  Мы разрабатываем мощные веб-продукты, помогаем компаниям расти
                  и автоматизировать процессы. От идеи до результата — всё под
                  ключ.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-white/60 my-28"></div>

          <div className="w-full flex justify-center gap-10">
            <div className="w-2/5">
              <img src={seo} alt="" />
            </div>
            <div className="w-2/5 flex flex-col justify-between">
              <div className="flex w-full justify-between">
                <img src={seo} alt="" className="w-2/5" />
                <img src={seo} alt="" className="w-2/5" />
              </div>
              <div>
                <p>
                  Мы разрабатываем мощные веб-продукты, помогаем компаниям расти
                  и автоматизировать процессы. От идеи до результата — всё под
                  ключ.
                </p>
              </div>
            </div>
          </div>
          <div>
            {/* <div className="w-full h-[706px]  rounded-4xl">
              <p>Хотите превратить свой сайт в самый ценный актив?</p>
              <button className="bg-blue-500 w-44 h-10 text-white rounded-3xl bg-gradient-to-r from-[#BB4642] to-[#A22976] flex justify-center items-center gap-2">
                Оставить заявку
                <Arrow width={10} />
              </button>
            </div> */}
            <div className="flex items-center justify-center min-h-screen">
              <div className="relative w-full h-[500px] p-8 text-center text-white bg-white/20 rounded-4xl backdrop-blur-xl flex flex-col items-center justify-center gap-40">
                <h2 className="text-4xl md:text-4xl font-semibold">
                  Хотите превратить свой сайт в <br /> самый ценный актив?
                </h2>
                <button className="bg-blue-500 w-44 h-10 text-white rounded-3xl bg-gradient-to-r from-[#BB4642] to-[#A22976] flex justify-center items-center gap-2">
                  Оставить заявку
                  <Arrow width={10} />
                </button>
                <div className="absolute inset-0 z-[-1] flex items-center justify-center">
                  <div className="w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Case;
