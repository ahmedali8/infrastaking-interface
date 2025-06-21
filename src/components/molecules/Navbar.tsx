import { useEffect, useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setHasScrolled(currentScrollY > 0);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setHidden(false);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${hasScrolled ? "bg-black/50 shadow-md" : "bg-transparent"}`}
    >
      <div className="container py-[23px] max-w-[87.5%] mx-auto flex items-center justify-between">
        {/* <a href="/">
          <img src="/logo.svg" className="md:w-[80px] w-[60px]" alt="Logo" />
        </a> */}
        {/* <a
          href="/"
          className="text-[#fff] font-bold text-2xl md:text-3xl tracking-tight"
        >
          InfraStaking
        </a> */}
        <a
          href="/"
          className="text-white font-extralight text-3xl md:text-base uppercase tracking-tight drop-shadow-sm flex items-center gap-2"
          style={{ fontFamily: '"Orbitron", sans-serif' }}
        >
          {/* InfraStaking */}
          <img src="/infrastaking-logo.png" className="w-10" alt="" />
          <span>InfraStaking</span>
        </a>

        <div className="hidden md:flex items-center gap-4 bg-white text-black px-10 backdrop-blur-sm rounded-full p-2">
          <a className="text-sm --font-inter font-light" href="#contact">
            Contact Us
          </a>
          {/* <a className="text-sm --font-inter font-light" href="#roadmap">
            Roadmap
          </a> */}
          <a className="text-sm --font-inter font-light" href="#faq">
            FAQ's
          </a>
          <a className="text-sm --font-inter font-light" href="/analytics">
            Analytics
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <a
          href="/download"
          className="hidden md:flex items-center gap-2 bg-white text-black px-5 backdrop-blur-sm rounded-full py-1"
        >
          <span className="text-sm --font-inter font-light">
            Start The Scan
          </span>
          <img src="/7994392.gif" alt="" className="w-[30px] h-[30px]" />
        </a>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-[86px] left-0 right-0 bg-blue-600 shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="container max-w-[87.5%] mx-auto py-6">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center gap-6 w-full mb-4">
                <a
                  className="text-sm --font-inter font-light text-white hover:text-blue-200 transition-colors"
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </a>
                {/* <a
                  className="text-sm --font-inter font-light text-white hover:text-blue-200 transition-colors"
                  href="#roadmap"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Roadmap
                </a> */}
                <a
                  className="text-sm --font-inter font-light text-white hover:text-blue-200 transition-colors"
                  href="#faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ's
                </a>
                <button
                  className="ml-auto text-white p-2 hover:text-blue-200 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <a
                href="/download"
                className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-sm --font-inter font-light text-white">
                  Start The Scan
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="i">
                    <path
                      d="M1 7.66653L1 1L7.66653 0.999999"
                      stroke="white"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M10.3331 1L16.9997 1V7.66653"
                      stroke="white"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M16.9996 10.3331L16.9996 16.9997L10.3331 16.9997"
                      stroke="white"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M7.6665 16.9997L0.999972 16.9997L0.999972 10.3331"
                      stroke="white"
                      strokeWidth="1.4"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
