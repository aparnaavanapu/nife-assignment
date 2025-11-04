import Cookies from "js-cookie";
import { useNavigate} from "react-router-dom";



const Home = () =>{

    const navigate = useNavigate();
    const handleLogout = () => {
        Cookies.remove("jwt_token");
        navigate("/login");
    };

    return(
        <div className="flex flex-col justify-center items-center self-center h-screen">
            <p className="text-center text-2xl font-semibold text-pink-500">Welcome to the Home Page !!!</p>
            <button onClick={handleLogout} className="mt-4 border-none bg-pink-500 rounded-md h-[40px] w-[130px] text-white">Logout</button>
        </div>
    )

}

export default Home;