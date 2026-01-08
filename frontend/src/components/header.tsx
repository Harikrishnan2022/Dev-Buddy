function Header() {
  return (
    <header className="dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <a className="block text-teal-600 dark:text-teal-300" href="#">
              <span className="sr-only">Home</span>
              <svg
                className="h-8"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.41 10.3847C1.14777 7.4194..."
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#review" className="text-gray-800 hover:text-indigo-600">
              Review
            </a>
            <a href="#about" className="text-gray-800 hover:text-indigo-600">
              About us
            </a>
            <a href="#course" className="text-gray-800 hover:text-indigo-600">
              Course
            </a>
            <a href="#contact" className="text-gray-800 hover:text-indigo-600">
              Contact us
            </a>

            <button className="bg-[#FFB766] hover:bg-[#ffa640] px-6 py-2 rounded-full font-semibold">
              Login
            </button>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            <button className="text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
