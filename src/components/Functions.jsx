import cashout from "../assets/cashout.webp";
import cashin from "../assets/cashin.webp";
import sendmoney from "../assets/sendmoney.webp";

const Functions = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-10 my-auto justify-center">
      <div className="group card bg-base-100 shadow-xl h-auto hover:cursor-pointer">
        <figure>
          <img
            src={cashout}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-3xl font-extrabold justify-center mt-3 group-hover:text-[#E2136E] duration-300">Cash Out</h2>
        </div>
      </div>
      <div className="group card bg-base-100 shadow-xl h-auto hover:cursor-pointer">
        <figure>
          <img
            src={sendmoney}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
        <h2 className="text-center text-3xl font-extrabold justify-center mt-3 group-hover:text-[#E2136E] duration-300" >Send Money</h2>
        </div>
      </div>
      <div className="group card bg-base-100 shadow-xl h-auto hover:cursor-pointer">
        <figure>
          <img
            src={cashin}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
        <h2 className="text-center text-3xl font-extrabold justify-center mt-3 group-hover:text-[#E2136E] duration-300 ">Cash In</h2>
        </div>
      </div>
    </div>
  );
};

export default Functions;
