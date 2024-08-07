import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">
              Email:{" "}
              <a
                href="mailto:support@example.com"
                className="text-gray-400 hover:text-gray-300"
              >
                support@example.com
              </a>
            </p>
            <p className="mb-2">
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-gray-400 hover:text-gray-300"
              >
                +123 456 7890
              </a>
            </p>
            <p className="mb-2">
              Address: 123 Fashion St, Style City, SC 12345
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-gray-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-gray-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2024 Yasuo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
