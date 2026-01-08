
function Header()
{
  return(
    <>
    <header className="w-full flex items-center justify-between px-8 py-3 bg-white shadow-sm border-b border-gray-100">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        {/* Replace the src with your actual logo path */}
        <img 
            src="images/Devbuddylogo2.png"
            alt="DevBuddy Logo"
            className="h-15 w-auto object-contain" // Limits height to keep header slim
          />
        <span className="text-2xl font-bold text-[#3D446E]">DevBuddy</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="#review" className="text-gray-800 font-medium hover:text-indigo-600 transition-colors">
          Review
        </a>
        <a href="#about" className="text-gray-800 font-medium hover:text-indigo-600 transition-colors">
          About us
        </a>
        <a href="#course" className="text-gray-800 font-medium hover:text-indigo-600 transition-colors">
          Course
        </a>
        <a href="#contact" className="text-gray-800 font-medium hover:text-indigo-600 transition-colors">
          Contact us
        </a>
        
        {/* Action Button */}
        <button className="bg-[#FFB766] hover:bg-[#ffa640] text-gray-900 font-semibold px-6 py-2 rounded-full transition-all">
          Login 
        </button>
      </nav>

      {/* Mobile Menu Icon (Optional) */}
      <div className="md:hidden">
        <button className="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header></>)
}

export default Header