
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const isHide=true
    const {user, handleLogin}=useAuth()
    const navigate =useNavigate()
    if (user) {
        navigate("/")
    }

    const handleLog =(e)=>{
        const from= e.target
        e.preventDefault()
        const email=from.email.value
        const password=from.password.value
        const loginInfo = {email, password}
        console.log(password.length);
        console.log(loginInfo);
        if ( !email || !password 
        ) {
            return alert("fill on section properly")
        }
        if (isNaN(password)) {
            return alert("password have to be a number")
        }
        if (password.length < 5 || password.length > 5) {
             return alert("password have to 5 degit")
        }
        handleLogin(loginInfo)
      }



    return (
        <div
      style={{
        backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url("https://i.ibb.co/gVW834g/3.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className=" text-white min-h-screen flex justify-center items-center"
    >
      <div className="flex justify-center items-center p-4 pt-10 pb-12 flex-1">
        <div className=" rounded-lg p-6  md:w-2/3 xl:w-1/3 mx-auto shadow-2xl backdrop-blur-md ">
          <form 
          onSubmit={handleLog}
          >
            <h1 className="text-4xl font-bold mt-12">Log In</h1>
            <p className="font-medium mt-6 opacity-70">
              Log in to stay connected
            </p>
            <div className=" flex justify-center items-center gap-2 border-b-2">
              <span className="material-symbols-outlined mt-10 text-2xl">
                alternate_email
              </span>
              <input
                placeholder="email or  number"
                name='email'
                className="w-full py-4  outline-none mt-10 bg-transparent placeholder:text-white"
              />
            </div>
            <div className="relative">
              <div className=" flex justify-center items-center gap-2 border-b-2">
                <span className="material-symbols-outlined mt-6 text-2xl">
                  lock
                </span>
                <input
                  type={isHide ? "text" : "password"}
                  name='password'
                  placeholder="password"
                  className="w-full py-4 outline-none mt-6 bg-transparent placeholder:text-white"
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
            <p className="flex justify-end text-[#4494e4] font-bold my-8">
              Forgot your Password ?
            </p>
            <input
              type="submit"
              value="Log In"
              className="btn w-full bg-[#003366] hover:bg-[#062747] text-white text-lg border-none"
            />
          </form>
          <p className="text-center mt-6 mb-8 font-medium opacity-80 text-lg">
            <span className="text-black">Do not have an account?</span>{" "}
            <Link to="/registration">
              <span className="text-[#003366] font-bold">Register Here</span>
            </Link>
          </p>
          {/* <div className="divider">OR</div> */}
          {/* social login */}
          {/* <div className="flex justify-center flex-wrap gap-x-8 gap-y-3 mt-8 mb-16">
            <button
            //   onClick={handleGoogleSignUP}
              className="btn flex items-center"
            >
              <img className="w-12 " src="google.png" alt="" />
              <p>Sign Up With Google</p>
            </button>
            <button
            //   onClick={githubSignUP}
              className="btn flex justify-between items-center"
            >
              <img className="w-7" src="github.png" alt="" />
              <p>Sign Up With Github</p>
            </button>
          </div> */}
        </div>
      </div>
    </div>
    );
};

export default Login;