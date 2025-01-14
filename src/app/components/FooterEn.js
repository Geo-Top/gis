import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function FooterEn() {
  const currentYear = new Date().getFullYear();
  return (
    <footer dir="ltr" className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/home/en" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/courses/en" className="hover:text-gray-400">
                  Courses
                </a>
              </li>
              <li>
                <a href="/instructors/en" className="hover:text-gray-400">
                Instructors
                </a>
              </li>
              <li>
                <a href="/contact/en" className="hover:text-gray-400">
                Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <a href="/privacypolicy/en" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms/en" className="hover:text-gray-400">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/faq/en" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <a href="mailto:geotopgroup@gmail.com" className="hover:text-gray-400">
                  geotopgroup@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone />
                <a href="tel:+201040950801" className="hover:text-gray-400">
                  +2010-4095-0801
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp />
                <a href="https://wa.me/201040950801" className="hover:text-gray-400">
                  Contact via WhatsApp
                </a>
              </li>
              <li className="flex gap-4 mt-4">
                <a href="https://www.facebook.com/profile.php?id=61560270966670" className="hover:text-gray-400 flex items-center gap-2">
                  <FaFacebook />
                </a>
                <a href="https://x.com/geotopgroup" className="hover:text-gray-400 flex items-center gap-2">
                  <FaXTwitter />
                </a>
                <a href="https://www.linkedin.com/company/geo-top-egypt" className="hover:text-gray-400 flex items-center gap-2">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/geotopgroup/" className="hover:text-gray-400 flex items-center gap-2">
                  <FaInstagram />
                </a>

                <a href="https://www.tiktok.com/@geotopgroup" className="hover:text-gray-400 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M187.6 73.8a48.4 48.4 0 0 1-23.8-23.4c-4.3-8.6-5.8-16.6-6.3-23.3h-29v154c0 16.1-13 29.1-29 29.1-8.2 0-15.5-3.3-20.8-8.6a29.2 29.2 0 0 1 20.8-49.6c3.2 0 6.3.6 9.2 1.6v-35.5a66.4 66.4 0 0 0-9.2-.7c-36.5 0-66 29.6-66 66 0 17.8 7 34 18.4 45.6C80.7 233.1 96.9 240 114.7 240c36.5 0 66-29.6 66-66v-84c6.2 3 13.6 5.1 23.8 6.3V73.8z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@geotopgroup" className="hover:text-gray-400 flex items-center gap-2">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-sm">
            {currentYear} Geo Top © | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
