import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProviders";

const Registration = () => {
  const isHide = true;
  // const all = useContext(AuthContext)
  // console.log(all);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url("https://i.ibb.co/gVW834g/3.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="flex justify-center items-center text-white min-h-screen"
    >
      <div className=" rounded-lg p-6 md:w-2/3 xl:w-1/3 mx-auto shadow-xl backdrop-blur-md">
        <form
        //   onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-4xl font-bold mt-12">Register New Account.</h1>
          <p className="font-medium mt-6 opacity-70">
            Create your Flavor Junction account
          </p>
          <div className="flex justify-center items-center gap-2 border-b-2">
            <span className="material-symbols-outlined mt-10 text-2xl">
              account_circle
            </span>
            <input
              placeholder="Full Name"
              className="w-full py-4  outline-none mt-10 bg-transparent placeholder:text-white "
            />
          </div>
          <div className="flex justify-center items-center gap-2 border-b-2">
            <span className="material-symbols-outlined mt-10 text-2xl">
              call
            </span>
            <input
              placeholder="Phone Number"
              className="w-full py-4  outline-none mt-10 bg-transparent placeholder:text-white "
            />
          </div>
          <div className="flex justify-center items-center gap-2 border-b-2">
            <span className="material-symbols-outlined mt-6 text-2xl">
              alternate_email
            </span>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full py-4  outline-none mt-6 bg-transparent placeholder:text-white "
            />
          </div>
          <div className="relative">
            <div className="flex justify-center items-center gap-2 border-b-2">
              <span className="material-symbols-outlined mt-6 text-2xl">
                lock
              </span>
              <input
                //   type={isHide ? "text" : "password"}
                placeholder="Your Password"
                className="w-full py-4 outline-none mt-6 bg-transparent placeholder:text-white "
              />
            </div>
            <p
              className="absolute right-5 top-11 hover:cursor-pointer"
              // onClick={handleHide}
            >
              {isHide ? (
                <span className="material-symbols-outlined">
                  visibility_off
                </span>
              ) : (
                <span className="material-symbols-outlined">visibility</span>
              )}
            </p>
          </div>
          <input
            type="submit"
            value="Create Account"
            className="btn w-full bg-[#003366] text-white text-lg border-none mt-6"
          />
        </form>
        <p className="text-center mt-6 mb-28 font-medium opacity-80 text-lg">
          <span className="opacity-80">Already have an account?</span>{" "}
          <Link to="/login">
            <span className="text-[#3482d1] font-bold">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
