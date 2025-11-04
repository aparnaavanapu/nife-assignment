import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate ,Navigate} from "react-router-dom";
import { TbMailFilled } from "react-icons/tb";
import { FaLock } from "react-icons/fa6";

const SignupRoute = () => {
  const [userMail, setUserMail] = useState("nanipinninti123@gmail.com");
  const [userPassword, setUserPassword] = useState("Nani@123");
  const navigate = useNavigate();

  const gotoSignup= ()=>{
    navigate("/signup");
  }

  const loginsuccess=(jwt_token)=>{
    console.log("Received Token:", jwt_token);
    Cookies.set("jwt_token", jwt_token, { expires: 3 });
    navigate("/");

  }

  const loginFailure=(error_msg)=>{
    alert(error_msg);
  }

  const onSubmitLoginForm = async (event) =>{
    event.preventDefault();
    const url=`${process.env.REACT_APP_DOMAIN}/auth/login`;
    const userDetails ={
        email:userMail,
        password:userPassword,
    }

    const options = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(userDetails)
    }

    try{
        const response = await  fetch(url,options)
        const data = await response.json();
        console.log(data);
        if (response.ok){
            loginsuccess(data.jwtToken)
            
        }
        else{
            loginFailure(data.error_msg)
        }
    }catch(error){
     console.error("Something went wrong.Please try agian.")
  }
  }

  const jwtToken=Cookies.get('jwt_token')
        if (jwtToken){
            return <Navigate to="/" replace/>
        }

  return (
    <div className="flex justify-center items-center h-screen bg-white text-gray-800">
      <div className="w-full max-w-[400px] sm:max-w-[450px] m-4  md:w-[400px] p-8 rounded-2xl shadow-xl border border-gray-300 bg-white">
        <h1 className="text-2xl font-semibold text-center text-pink-500 mb-8">Login</h1>

        <form className="flex flex-col gap-8" onSubmit={onSubmitLoginForm}>
          
          <div className="relative">
            <input
              type="email"
              id="email"
              value={userMail}
              onChange={(e) => setUserMail(e.target.value)}
              placeholder=" "
              className="peer w-full border-b-2 border-gray-600 bg-transparent text-black text-[16px] pt-6 pb-2 
              focus:outline-none focus:border-pink-500 transition-all"
            />
            <label
              htmlFor="email"
              className="absolute left-0 text-gray-400 text-md transition-all
              top-[22px] peer-placeholder-shown:top-[22px]
              peer-focus:top-[2px] peer-[&:not(:placeholder-shown)]:top-[2px]
              peer-focus:text-pink-500 peer-[&:not(:placeholder-shown)]:text-pink-500
              peer-focus:text-[14px] peer-[&:not(:placeholder-shown)]:text-[14px]"
            >
              Email
            </label>
            <TbMailFilled
              className="absolute right-0 text-gray-400 text-[18px] transition-all
              top-[26px] peer-placeholder-shown:top-[26px]
              peer-focus:top-[4px] peer-[&:not(:placeholder-shown)]:top-[4px]
              peer-focus:text-pink-500 peer-[&:not(:placeholder-shown)]:text-pink-500"
            />
          </div>

          <div className="relative">
            <input
              type="password"
              id="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              placeholder=" "
              className="peer w-full border-b-2 border-gray-600 bg-transparent text-black text-[16px] pt-6 pb-2 
              focus:outline-none focus:border-pink-500 transition-all"
            />
            <label
              htmlFor="password"
              className="absolute left-0 text-gray-400 text-md transition-all
              top-[22px] peer-placeholder-shown:top-[22px]
              peer-focus:top-[2px] peer-[&:not(:placeholder-shown)]:top-[2px]
              peer-focus:text-pink-500 peer-[&:not(:placeholder-shown)]:text-pink-500
              peer-focus:text-[14px] peer-[&:not(:placeholder-shown)]:text-[14px]"
            >
              Password
            </label>
            <FaLock
              className="absolute right-0 text-gray-400 text-[18px] transition-all
              top-[26px] peer-placeholder-shown:top-[26px]
              peer-focus:top-[4px] peer-[&:not(:placeholder-shown)]:top-[4px]
              peer-focus:text-pink-500 peer-[&:not(:placeholder-shown)]:text-pink-500"
            />
          </div>

          <button type="submit" className="w-full mt-4 py-2 border-2 border-pink-500 rounded-full text-pink-500 font-semibold  hover:bg-pink-500 hover:text-white transition-all">Login</button>

          <p className="text-center text-sm text-gray-400">Don't have an account?{" "}<span className="text-pink-500 cursor-pointer hover:underline" onClick={gotoSignup}> Register</span></p>
        </form>
      </div>
    </div>
  );
};

export default SignupRoute;
