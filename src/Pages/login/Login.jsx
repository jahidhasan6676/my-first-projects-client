import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";

const Login = () => {
  const { loginUser, setUser } = useAuth();
  const navigate = useNavigate();
  const [pass, setPass] = useState('');
  const [mail, setMail] = useState('');

  const handleLoginUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // user login
    loginUser(email, password)
      .then(result => {
        setUser(result.user)
        navigate(location?.state ? location.state : "/")
        toast.success("Successfully Login")
      })
      .catch(err => {
        toast.error(err.message)
      })

  }

  // handle seller, moderator and admin email
  const handleSeller = () =>{
    setPass("123456")
    setMail("seller@gmail.com")
  }
  const handleModerator = () => {
    setPass("123456")
    setMail("moderator@gmail.com")
  }
  const handleAdmin = () => {
    setPass("123456")
    setMail("kamrul@gmail.com")
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fde1ff]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl text-center font-semibold  mb-6">Login Now</h2>

        <div className="flex justify-center items-center gap-2 mb-4">
          <button onClick={handleSeller}>Seller</button>
          <button onClick={handleModerator}>Moderator</button>
          <button onClick={handleAdmin}>Admin</button>
        </div>

        <form onSubmit={handleLoginUser}>
          {/* Email & Password Input */}
          <div className="space-y-4">
            <input
              name="email"
              type="email"
              defaultValue={mail}
              placeholder="Email Address *"
              className="w-full px-4 py-2 border rounded-md focus:outline-none  focus:border-gray-500"
            />
            <input
              name="password"
              type="password"
              defaultValue={pass}
              placeholder="Password *"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-gray-500"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-end items-center mt-4 text-sm">

            <Link className="text-secondary hover:underline">Forgot Password?</Link>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-secondary text-white py-2 rounded-md mt-4 hover:bg-primary transition">
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm mt-3">
          Don't Have an Account? <Link to="/register" className="text-secondary hover:underline">Register</Link>
        </p>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <hr className="w-full border-gray-300" />
          <span className="mx-2 bg-white px-3 text-gray-500 font-semibold">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Social Login */}
        
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
