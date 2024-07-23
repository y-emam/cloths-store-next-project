import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer class="w-full bg-black text-white py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between">
          <div class="w-full md:w-1/3 mb-6">
            <h3 class="text-xl font-bold mb-4">Contact Us</h3>
            <p class="mb-2">
              Email:{" "}
              <a
                href="mailto:support@example.com"
                class="text-gray-400 hover:text-gray-300"
              >
                support@example.com
              </a>
            </p>
            <p class="mb-2">
              Phone:{" "}
              <a
                href="tel:+1234567890"
                class="text-gray-400 hover:text-gray-300"
              >
                +123 456 7890
              </a>
            </p>
            <p class="mb-2">Address: 123 Fashion St, Style City, SC 12345</p>
          </div>

          <div class="w-full md:w-1/3 mb-6">
            <h3 class="text-xl font-bold mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-gray-300">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-300">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-300">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-300">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div class="w-full md:w-1/3 mb-6">
            <h3 class="text-xl font-bold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <Link href="/" class="text-gray-400 hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  class="text-gray-400 hover:text-gray-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" class="text-gray-400 hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" class="text-gray-400 hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-700 pt-4 text-center">
          <p class="text-sm">&copy; 2024 Yasuo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
