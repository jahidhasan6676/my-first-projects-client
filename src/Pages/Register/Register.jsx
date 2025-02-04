import { Link, useNavigate } from "react-router-dom";
import google_icon from "../../assets/social_icon/google.png"
import SocialLogin from "../Shared/SocialLogin";
import useAuth from "../../Hooks/useAuth";


const Register = () => {
    const {createUser,setUser} = useAuth();
    const navigate = useNavigate();
    const handleRegisterUser = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // create user
        createUser(email,password)
        .then(result =>{
            setUser(result.user)
            navigate("/")
        })
        .catch(err =>{
            console.log(err)
        })

    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#fde1ff]">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl text-center font-semibold  mb-6">Register Now</h2>

                <form onSubmit={handleRegisterUser}>
                    {/* Email & Password Input */}
                    <div className="space-y-4">
                        <input
                            name="name"
                            type="text"
                            placeholder="user name *"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none  "
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email Address *"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none  "
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password *"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none "
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-secondary text-white py-2 rounded-md mt-4 hover:bg-primary transition">
                        Register
                    </button>

                </form>
                {/* Sign Up Link */}
                <p className="text-center text-sm mt-3">
                    Don't Have an Account? <Link to="/login" className="text-secondary hover:underline">Login</Link>
                </p>

                {/* OR Divider */}
                <div className="flex items-center my-4">
                    <hr className="w-full border-gray-300" />
                    <span className="mx-2 bg-white px-3 text-gray-500 font-semibold">OR</span>
                    <hr className="w-full border-gray-300" />
                </div>

                {/* Social Login */}
                <p className="text-center font-medium mb-3">Login With Social Media</p>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Register;