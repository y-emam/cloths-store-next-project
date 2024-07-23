/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main class="py-12">
      <div class="container mx-auto px-4">
        <section class="text-center mb-12">
          <h1 class="text-4xl font-bold mb-4">About Us</h1>
          <p class="text-lg text-white">
            Welcome to Your Company, where we bring you the best in fashion and
            style. Our mission is to provide high-quality clothing that empowers
            you to express your individuality.
          </p>
        </section>

        <section class="flex flex-col md:flex-row items-center mb-12">
          <div class="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src="assets/images/yasser.jpg"
              alt="Our Story"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div class="w-full md:w-1/2 md:pl-8">
            <h2 class="text-3xl font-bold mb-4">Our Story</h2>
            <p class="text-white">
              Founded in 2024, Your Company started with a simple vision: to
              revolutionize the fashion industry with a focus on quality and
              customer satisfaction. Our team is dedicated to curating
              collections that reflect the latest trends while ensuring
              exceptional craftsmanship.
            </p>
            <p class="text-white mt-4">
              We believe in sustainability and ethical practices, and we are
              committed to making a positive impact on both our customers and
              the environment. Thank you for joining us on this journey, and we
              look forward to helping you discover your perfect style.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
