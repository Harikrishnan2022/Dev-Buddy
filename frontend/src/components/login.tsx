import { useState, type FormEvent } from "react";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link,useNavigate } from "react-router-dom";
import { app } from "../firebase/firebase"; // adjust path if needed


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
    // later: navigate("/dashboard");
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
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-[#98A2EE] rounded-[40px] p-10 shadow-xl">

        {/* Logo */}
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          className="mx-auto h-10 w-auto"
        />

        <h2 className="mt-6 text-center text-2xl font-bold text-white">
          Sign in to your account
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#3D446E] text-white placeholder-gray-400 rounded-xl px-4 py-4 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#3D446E] text-white placeholder-gray-400 rounded-xl px-4 py-4 outline-none"
            required
          />

          <div className="flex justify-between items-center text-xs text-white px-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3D446E] text-white font-bold text-2xl py-4 rounded-xl hover:bg-[#2f3557] transition-colors"
          >
            LOGIN
          </button>

          <p className="text-center text-white text-sm">
            Don&apos;t have an account?{" "}
      <Link
      to="/signup"
      className="font-bold hover:underline"> 

              Sign up
      </Link>
            
           
          </p>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full bg-white flex justify-center items-center py-3 rounded-xl"
          >
            <img
              src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
              alt="Google"
              className="h-8 w-8"
            />
          </button>
        </form>
      </div>
    </div>
  );
}
