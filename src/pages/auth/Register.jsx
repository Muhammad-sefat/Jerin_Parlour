import { useState } from "react";
import { Link } from "react-router";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import logo from "../../assets/logo.png";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

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
          Register
        </h2>

        {/* Form */}
        <form>
          {/* Name */}
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Name
          </label>
          <div className="flex items-center border rounded-lg px-3 mb-4 shadow-sm bg-white">
            <User className="text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-2 py-2 outline-none text-sm text-gray-700"
            />
          </div>

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
              placeholder="Create a password"
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

          {/* Terms & Conditions */}
          <div className="flex items-start gap-2 text-sm text-gray-600 mb-4">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mt-1"
            />
            <label htmlFor="terms">
              I agree to the{" "}
              <span className="text-[#f73d7b] hover:underline cursor-pointer">
                Terms and Conditions
              </span>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={!agreed}
            className={`w-full ${
              agreed
                ? "bg-[#f73d7b] hover:bg-[#e42b6b]"
                : "bg-gray-300 cursor-not-allowed"
            } text-white py-2 rounded-lg text-sm font-semibold transition duration-300 shadow`}
          >
            Register
          </button>

          {/* Login Redirect */}
          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#f73d7b] font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
