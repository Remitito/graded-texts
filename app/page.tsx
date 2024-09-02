import Navbar from "./(components)/Navbar";
import { Poppins, Lato, Montserrat } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const lato = Lato({
  subsets: ["latin"],
  weight: "700",
});

const montserratBig = Montserrat({
  subsets: ["latin"],
  weight: "500",
});
const montserratSmall = Montserrat({
  subsets: ["latin"],
  weight: "200",
});

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center">
      <Navbar />
      <div className="h-1/2 w-full bg-red-600">
        <div className="w-1/2 h-full flex flex-col justify-evenly items-center">
          <div className="flex flex-col text-center">
            <label className={`${montserratBig.className} text-white text-4xl`}>
              Classic Chinese Texts
            </label>
            <label
              className={`${montserratSmall.className} text-white text-2xl`}
            >
              Simplified by HSK level{" "}
            </label>
          </div>
          <button
            className={`${lato.className} border p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:translate-y-1 transition-transform duration-200 ease-in-out`}
          >
            FIND A TEXT
          </button>
        </div>
      </div>
      <div className="h-1/2"></div>
    </main>
  );
}
