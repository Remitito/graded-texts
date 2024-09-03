import Carousel from "./(components)/Carousel";
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
};

const examples: LatestProps[] = [
  {
    title: "The Scholars (儒林外史)",
    imgPath: "/images/theScholars.webp",
  },
  {
    title: "The Art of War (孫子兵法)",
    imgPath: "/images/theArtOfWar.webp",
  },
  {
    title: "Journey to the West (西游记)",
    imgPath: "/images/journeyToTheWest.webp",
  },
  {
    title: "Water Margin (水浒传)",
    imgPath: "/images/waterMargin.webp",
  },
  {
    title: "Call To Arms (呐喊)",
    imgPath: "/images/callToArms.webp",
  },
  {
    title: "The Plum in the Golden Vase (金瓶梅)",
    imgPath: "/images/plumVase.webp",
  },
];

const bulletStyle = `${montserratSmall.className} text-xs md:text-xl flex items-center`;

export default function Home() {
  const Latest: React.FC<LatestProps> = ({ title, imgPath }) => {
    return (
      <div className="h-full flex flex-col justify-center items-center bg-white shadow-xl rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <img
          className="h-5/6 w-full rounded-t-lg object-cover"
          src={imgPath}
          alt={title}
        />
        <h1
          className={`h-1/4 ${montserratMed.className} text-center sm:text-sm md:text-md lg:text-lg my-4 px-4 text-gray-900`}
        >
          {title}
        </h1>
      </div>
    );
  };

  return (
    <main className="flex h-screen w-screen flex-col items-center bg-gray-50">
      <Navbar />
      <div className="h-2/6 w-full flex flex-row  bg-red-600">
        <div className="w-1/2 h-full flex flex-col justify-evenly items-center p-8">
          <div className="flex flex-col text-center">
            <label
              className={`${montserratBig.className} text-white text-2xl md:text-3xl lg:text-5xl font-semibold`}
            >
              Simplified Chinese Texts
            </label>
            <label
              className={`${montserratSmall.className} text-white text-lg md:text-xl mt-2`}
            >
              Graded by HSK level{" "}
            </label>
          </div>
          <button
            className={`${lato.className} border text-xs md:text-lg border-white py-2 px-4 bg-white text-red-600 rounded-full shadow-lg hover:shadow-2xl hover:text-red-300 transform hover:translate-y-1 transition-transform duration-300 ease-in-out`}
          >
            GET STARTED
          </button>
        </div>
        <div className="w-3/4 h-full flex justify-center items-center">
          <ul className="text-white mt-4 space-y-4 text-left">
            <li className={bulletStyle}>
              <span className="inline-block mr-2">
                <img
                  src="/icons/check-circle.svg"
                  alt="Check"
                  className="h-5 w-5"
                />
              </span>
              Free Chinese Texts
            </li>
            <li className={bulletStyle}>
              <span className="inline-block mr-2">
                <img
                  src="/icons/check-circle.svg"
                  alt="Check"
                  className="h-5 w-5"
                />
              </span>
              Save New Words
            </li>
            <li className={bulletStyle}>
              <span className="inline-block mr-2">
                <img
                  src="/icons/check-circle.svg"
                  alt="Check"
                  className="h-5 w-5"
                />
              </span>
              Bilingual Chapter Summaries
            </li>
            <li className={bulletStyle}>
              <span className="inline-block mr-2">
                <img
                  src="/icons/check-circle.svg"
                  alt="Check"
                  className="h-5 w-5"
                />
              </span>
              New Texts Weekly
            </li>
          </ul>

          <img src="/images/woman.png" className="h-5/6 object-contain"></img>
        </div>
      </div>
      <div className="mt-12 h-1/2 w-full flex flex-col justify-evenly items-center">
        <h1
          className={`${montserratBig.className} text-xl md:text-3xl lg:text-5xl mb-8 font-semibold text-gray-800`}
        >
          Latest Texts
        </h1>
        <div className="h-4/5 md:h-3/5 lg:h-3/5 items-center flex flex-row w-4/5 justify-evenly">
          {examples.map((text, index) => {
            return (
              <Latest
                title={text.title}
                imgPath={text.imgPath}
                key={"latest" + index}
              ></Latest>
            );
          })}
        </div>
        {/* <Carousel>
          {examples.map((text, index) => {
            return (
              <img
                className="w-1/5"
                src={text.imgPath}
                key={"latest" + index}
              ></img>
            );
          })}
        </Carousel> */}
      </div>
    </main>
  );
}
