import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg px-8 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link to={"/"}>
            <img className="h-10" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center text-[#f73d7b] mb-6">
          Login
        </h2>

        {/* Form */}
        <form>
          {/* Email */}
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="flex items-center border rounded-lg px-3 mb-4 shadow-sm bg-white">
            <Mail className="text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-2 py-2 outline-none text-sm text-gray-700"
            />
          </div>

          {/* Password */}
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="flex items-center border rounded-lg px-3 mb-4 shadow-sm bg-white">
            <Lock className="text-gray-400 w-5 h-5" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-2 py-2 outline-none text-sm text-gray-700"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400"
            >
              {showPassword ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#f73d7b] hover:bg-[#e42b6b] text-white py-2 rounded-lg text-sm font-semibold transition duration-300 shadow"
          >
            Login
          </button>

          {/* Google Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 my-6 border hover:bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium transition duration-300"
          >
            <img
              src="https://img.icons8.com/color/20/google-logo.png"
              alt="Google"
            />
            Login with Google
          </button>

          {/* Register Link */}
          <p className="mt-6 text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-[#f73d7b] font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
