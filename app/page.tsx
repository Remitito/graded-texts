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
const montserratMed = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const montserratSmall = Montserrat({
  subsets: ["latin"],
  weight: "200",
});

type LatestProps = {
  title: string;
  imgPath: string;
  levels: number[];
};

const examples: LatestProps[] = [
  {
    title: "To Live (活着)",
    imgPath: "/images/huozhe.webp",
    levels: [1, 3, 5],
  },
  {
    title: "Call To Arms (呐喊)",
    imgPath: "/images/callToArms.webp",
    levels: [2, 4, 6],
  },
  {
    title: "Art of War (孫子兵法)",
    imgPath: "/images/artOfWar.webp",
    levels: [4, 5],
  },
];

export default function Home() {
  const Latest: React.FC<LatestProps> = ({ title, imgPath, levels }) => {
    return (
      <div className="w-1/6 h-full flex flex-col justify-center items-center bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105">
        <img
          className="h-5/6 w-full rounded-t-lg object-cover"
          src={imgPath}
          alt={title}
        />
        <h1
          className={`h-1/4 ${montserratMed.className} text-center text-xl my-2 px-4 text-gray-800`}
        >
          {title}
        </h1>
      </div>
    );
  };

  return (
    <main className="flex h-screen w-screen flex-col items-center">
      <Navbar />
      <div className="h-2/5 w-full flex flex-row bg-red-600">
        <div className="w-1/2 h-full flex flex-col justify-evenly items-center">
          <div className="flex flex-col text-center">
            <label
              className={`${montserratBig.className} text-white text-xl md:text-2xl lg:text-5xl`}
            >
              Classic Chinese Texts
            </label>
            <label
              className={`${montserratSmall.className} text-white text-lg md:text-2xl`}
            >
              Simplified by HSK level{" "}
            </label>
          </div>
          <button
            className={`${lato.className} border p-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:translate-y-1 transition-transform duration-200 ease-in-out`}
          >
            GET STARTED
          </button>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <img src="/images/woman.png" className="h-5/6"></img>
        </div>
      </div>
      <div className="h-1/2 w-full flex flex-col justify-evenly text-center items-center">
        <h1
          className={`${montserratBig.className} text-xl md:text-2xl lg:text-5xl`}
        >
          Latest Texts
        </h1>
        <div className="h-1/2 items-center flex flex-row w-full justify-evenly">
          {examples.map((text, index) => {
            return (
              <Latest
                title={text.title}
                imgPath={text.imgPath}
                levels={text.levels}
                key={"latest" + index}
              ></Latest>
            );
          })}
        </div>
      </div>
    </main>
  );
}
