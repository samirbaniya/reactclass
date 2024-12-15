import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-[#212121] text-gray-300 py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* About Section */}
          <div>
            <h4 className="text-white font-semibold mb-3">ABOUT</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  QuickStoreNep Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>

          {/* Group Companies Section */}
          <div>
            <h4 className="text-white font-semibold mb-3">GROUP COMPANIES</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Myntra
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cleartrip
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shopsy
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="border-r border-gray-700">
            <h4 className="text-white font-semibold mb-3">HELP</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Payments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cancellation & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Consumer Policy Section */}
          <div>
            <h4 className="text-white font-semibold mb-3">CONSUMER POLICY</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Cancellation & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-white font-semibold mb-3">Mail Us:</h4>
            <p className="text-sm leading-6">
              QuickStoreNep Private Limited, Buildings Alyssa, Begonia & Clove
              Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
              Bengaluru, 560103, Karnataka, India
            </p>
            <div className="mt-4 flex space-x-3">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">© QuickStoreNep.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
