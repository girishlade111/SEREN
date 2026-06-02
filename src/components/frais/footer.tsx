import { Instagram, Facebook } from "lucide-react";

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      width="20"
      height="20"
    >
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-frais-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Column 1: Logo */}
          <div>
            <div className="border-2 border-frais-dark px-6 py-2.5 inline-block">
              <span className="font-serif text-2xl tracking-widest text-frais-dark">
                FRAIS
              </span>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h4 className="text-frais-dark text-sm font-semibold tracking-[0.2em] mb-5">
              SHOP
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-frais-gray text-sm hover:text-frais-dark transition-colors duration-200"
                >
                  FOR THE BODY
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-frais-gray text-sm hover:text-frais-dark transition-colors duration-200"
                >
                  FOR THE HOME
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Help */}
          <div>
            <h4 className="text-frais-dark text-sm font-semibold tracking-[0.2em] mb-5">
              HELP
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-frais-gray text-sm hover:text-frais-dark transition-colors duration-200"
                >
                  TERMS & CONDITIONS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-frais-gray text-sm hover:text-frais-dark transition-colors duration-200"
                >
                  PRIVACY POLICY
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-frais-gray text-sm hover:text-frais-dark transition-colors duration-200"
                >
                  REFUND POLICY
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-frais-gray text-sm hover:text-frais-dark transition-colors duration-200"
                >
                  ACCESSIBILITY STATEMENT
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-frais-dark text-sm font-semibold tracking-[0.2em] mb-5">
              CONTACT US
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="tel:123-456-7890"
                  className="text-frais-gray text-sm hover:text-frais-dark transition-colors duration-200"
                >
                  123-456-7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:INFO@MYSTORE.COM"
                  className="text-frais-gray text-sm hover:text-frais-dark transition-colors duration-200"
                >
                  INFO@MYSTORE.COM
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-5">
              <a
                href="#"
                className="text-frais-gray hover:text-frais-dark transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-frais-gray hover:text-frais-dark transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-frais-gray hover:text-frais-dark transition-colors duration-200"
                aria-label="Pinterest"
              >
                <PinterestIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-frais-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-frais-gray/70 text-xs text-center">
            © 2026 by Frais. Powered and secured by Wix
          </p>
        </div>
      </div>
    </footer>
  );
}
