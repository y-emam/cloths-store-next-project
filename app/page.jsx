import { Covered_By_Your_Grace } from "next/font/google";
import Image from "next/image";

export const metadata = {
  title: "Yasuo Store",
  description: "Purchase anything you need",
};

const font = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <section className="w-full flex-col text-white text-center">
      <header className="mb-96 self-center">
        <div className="translate-y-1/2">
          <h1 className="text-center text-5xl font-bold">
            <span className={`${font.className} text-8xl`}>YASUO</span> Store
          </h1>
          <p className="text-center font-medium mt-2 text-lg">
            Style Delivered to Your Doorstep
          </p>
          <br />
          <a href="/products" className="home_white_btn">
            Products
          </a>
        </div>
      </header>
      <section class="w-full h-screenflex items-center justify-center mb-52">
        <div class="text-center text-white px-4 py-8">
          <h2 class="text-4xl font-bold mb-4">Summer Deals</h2>
          <p class="text-lg mb-8">Enjoy Hot Discounts on Summer Styles!</p>
          <a href="/products" className="home_white_btn">
            Products
          </a>
        </div>
      </section>
      <section class="w-full bg-black text-white py-12 mb-10">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-8">
            What Our Customers Say
          </h2>
          <div class="flex flex-wrap justify-center space-x-4 space-y-4">
            <div class="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm">
              <p class="text-gray-300 mb-4">
                The quality of the clothes is fantastic and the delivery was
                fast. Will definitely shop here again!
              </p>
              <div class="flex items-center">
                <Image
                  width={320}
                  height={320}
                  src="/assets/products/black_hoody.jpg"
                  alt="Customer 1"
                  class="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p class="font-semibold">Jane Doe</p>
                  <p class="text-yellow-400">★★★★★</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
