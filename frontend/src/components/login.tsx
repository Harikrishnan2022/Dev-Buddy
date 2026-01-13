import { useState, type FormEvent } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../firebase/firebase";

const auth = getAuth(app);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful ✅");
      // navigate("/dashboard");
    } catch (error: any) {
      alert(error.message);
    }
  }

  async function handleGoogleLogin() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Google login successful ✅");
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    // ⬇️ FIX: subtract navbar height (64px)
    <div className="w-full min-h-[calc(100vh-64px)] flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-[#8ea2fa] rounded-lg shadow-md p-8">

        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Sign in to your account
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
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-white">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-white hover:underline">
              Forgot password?
            </a>
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
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline font-medium">
              Sign up
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
                       bg-gray-100 "
          >
            <img
              src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-gray-700">
              Sign in with Google
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
