import { Covered_By_Your_Grace } from "next/font/google";

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
    <section className="w-full flex-col text-white">
      <header className="mt-16 self-center">
        <h1 className="text-center text-5xl font-bold">
          <span className={`${font.className} text-8xl`}>YASUO</span> Store
        </h1>
        <p className="text-center font-medium mt-2 text-lg">
          Purchase the products you need to make your life easier
        </p>
      </header>
    </section>
  );
}
