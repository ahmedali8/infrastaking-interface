import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTelegram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="relative w-full flex flex-col py-5 md:py-10">
      <div className="container flex flex-col mx-auto bg-[#e5efff] min-h-[300px] z-10 rounded-lg">
        <div className="flex flex-col md:flex-row items-start pt-5 md:pt-10 px-5 md:px-10">
          <div className="flex flex-col mb-5 md:mb-0">
            <h3 className="text-black/50 font-light">
              InfraStaking is the Future of Institutional DePIN.
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0 md:ml-auto w-full max-w-[600px]">
            <div className="flex flex-col"></div>
            <div className="flex flex-col"></div>
            <div className="flex flex-col">
              <h3 className="text-black/50 font-light uppercase">Company</h3>
              <ul className="flex flex-col mt-3 md:mt-5 space-y-2">
                
                <a
                  className="text-black font-light hover:text-black/70 transition-colors"
                  href="/contact"
                >
                  Contact Us
                </a>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-black/50 font-light uppercase">Services</h3>
              <ul className="flex flex-col mt-3 md:mt-5 space-y-2">
                <a
                  className="text-black font-light hover:text-black/70 transition-colors"
                  href="/analytics"
                >
                  Analytics
                </a>
                <a
                  className="text-black font-light hover:text-black/70 transition-colors"
                  href="https://smart-wallet-stellar.surge.sh/"
                  target="_blank"
                >
                  Sign in
                </a>
                {/* <a
                  className="text-black font-light hover:text-black/70 transition-colors"
                  href=""
                >
                  Active Trader
                </a> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-auto px-5 md:px-10 pb-5 md:pb-10">
          <div className="flex items-center gap-2">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/Infrastaking"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black rounded-full transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@Infrastaking"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black rounded-full transition"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/InfraStaking"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black rounded-full transition"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/infrastaking"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black rounded-full transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            {/* X (Twitter) */}
            <a
              href="https://twitter.com/infrastaking"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black rounded-full transition"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
          <div className="mt-5">
            <span className="text-sm font-light text-black/40">
              Copyright © 2025 InfraStaking. All rights reserved.
            </span>
          </div>
        </div>
      </div>
      {/* <div className="max-w-[95%] md:max-w-[80%] flex flex-col md:-mt-6 w-full mx-auto bg-[#c7dcfe] min-h-[200px] rounded-lg p-10">
        <span className="text-sm font-light text-black/40">
          Copyright © 2025 InfraStaking. All rights reserved.
        </span>
       
      </div> */}
    </footer>
  );
}
