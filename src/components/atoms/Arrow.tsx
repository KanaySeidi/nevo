import arrow from "../../assets/arrow.svg";

const Arrow = ({ width }: { width: number }) => {
  return (
    <div>
      <img src={arrow} alt="arrow" width={width} />
    </div>
  );
};

export default Arrow;
