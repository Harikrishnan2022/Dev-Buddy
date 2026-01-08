import type { FormEvent } from "react";

export default function Login() {
  function setEmail(value: string): void {
    throw new Error("Function not implemented.");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">
        ```
      */}
      <div className="block w-full 
border border-gray-600 
bg-gray-800 
px-3 py-1.5 
text-white placeholder-gray-400 
focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 
sm:text-sm">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
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
