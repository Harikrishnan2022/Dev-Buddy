import type { FormEvent } from "react";

export default function Login() {
  function setEmail(value: string): void {
    throw new Error("Function not implemented.");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="min-h-screen w-screen  flex flex-col flex items-center justify-center bg-gray-100">
      <main className="flex-grow flex flex-col md:flex-row items-center justify-center px-6 lg:px-20 gap-10">
        
        {/* Left Side: Welcome Text */}
        <div className="md:w-1/2 max-w-lg">
          <h1 className="text-6xl font-black tracking-tight text-black mb-4">
            WELCOME
          </h1>
          <p className="text-gray-700 text-lg leading-snug font-medium">
            Log in to access your dashboard, continue learning, and manage your courses. 
            Enter your credentials to get started.
          </p>
        </div>

        {/* Right Side: Login Card */}
        <div className="md:w-1/2 w-full max-w-md bg-[#98A2EE] rounded-[40px] p-10 shadow-xl">
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="username" 
              className="w-full bg-[#3D446E] text-white placeholder-gray-400 rounded-xl px-4 py-4 outline-none border-none"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-[#3D446E] text-white placeholder-gray-400 rounded-xl px-4 py-4 outline-none border-none"
            />
            
            <div className="flex justify-between items-center text-xs text-white px-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded bg-[#3D446E] border-none" />
                Remember me
              </label>
              <a href="#" className="hover:underline">Forgot password?</a>
            </div>

            <button className="w-full bg-[#3D446E] text-white font-bold text-2xl py-4 rounded-xl mt-4 hover:bg-[#2f3557] transition-colors">
              LOGIN
            </button>

            <p className="text-center text-white text-sm mt-4">
              Don't have an account? <span className="font-bold cursor-pointer hover:underline">Sign up</span>
            </p>

            {/* Google Login Button */}
            <button type="button" className="w-full bg-white flex justify-center items-center py-3 rounded-xl mt-4">
              <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" className="h-8 w-8" />
            </button>
          </form>
        </div>
      </main>
    </div>
  
    
  );
}
