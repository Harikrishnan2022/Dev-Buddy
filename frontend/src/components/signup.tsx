import { useState, type FormEvent } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../firebase/firebase";
import { Card, Button, TextInput, Label } from "flowbite-react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (error: any) {
      alert(error.message);
    }
  }

  async function handleGoogleLogin() {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    // ⬇️ FIX: subtract navbar height (64px)
    <div className="w-full min-h-[calc(100vh-64px)] flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-[#8ea2fa] rounded-lg shadow-md p-8">

        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Create new account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Email"
    className="bg-[#363e63] border border-white/10 text-white text-sm rounded-lg 
               placeholder-[#bcc7f7] focus:ring-blue-500 focus:border-blue-500 
               block w-full p-2.5 outline-none"
    required
  />
</div>

          {/* Password */}
          <div>
           
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="bg-[#363e63] border border-white/10 text-white text-sm rounded-lg 
               placeholder-[#bcc7f7] focus:ring-blue-500 focus:border-blue-500 
               block w-full p-2.5 outline-none"
              required
            />
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              
              
            </div>
           
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-[#363e63] border border-white/10 text-white text-sm rounded-lg 
               placeholder-[#bcc7f7] focus:ring-blue-500 focus:border-blue-500 
               block w-full p-2.5 outline-none"
          >
            Login
          </button>

          {/* Signup */}
          <p className="text-sm text-gray-600 text-center">
           Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Sign in
            </Link>
          </p>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 
                       border border-gray-300 rounded-lg py-2.5 
                       bg-gray-100 hover:bg-gray-100 transition "
          >
            <img
              src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-gray-700">
              Sign up with Google
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
