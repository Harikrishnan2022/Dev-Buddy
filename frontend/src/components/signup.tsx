import { useState, type FormEvent } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../firebase/firebase";

const auth = getAuth(app);

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

        <h2 className="text-center text-2xl font-bold text-white mb-6">
          Signup
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#3D446E] text-white rounded-xl px-4 py-4"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#3D446E] text-white rounded-xl px-4 py-4"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#3D446E] text-white font-bold py-4 rounded-xl"
          >
            SIGN UP
          </button>

          <p className="text-center text-white text-sm">
            Already have an account?{" "}
            <Link to="/login" className="font-bold underline">
              Login
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
