import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="relative py-[146px] sm:py-[172px]">
        <div className="absolute bottom-0 top-0 z-[-1] w-full overflow-hidden">
          <div className="bg-patternTop absolute aspect-square w-full translate-x-[-50%] translate-y-[-50%] bg-[size:100%_100%] bg-no-repeat"></div>
          <div className="bg-patternBottom absolute left-[50%] top-[75%] aspect-square w-full bg-[size:100%_100%] bg-no-repeat"></div>
        </div>
        <div className="mx-auto w-[87%] max-w-[350px] overflow-hidden rounded-xl">
          <div className="relative aspect-square h-[140px] w-full">
            <Image
              priority
              src="/images/bg-pattern-card.svg"
              alt="bg-pattern-top"
              fill
            />
          </div>
          <div className="flex flex-col items-center bg-white">
            <div className="relative -mt-[52px] w-[100px] overflow-hidden rounded-full bg-white p-1">
              <Image
                priority
                className="aspect-square w-[99%] rounded-full"
                src="/images/image-victor.jpg"
                alt="image-victor"
                width={100}
                height={100}
              />
            </div>
            <div className="mt-5 flex gap-[9px] bg-white text-[18px]">
              <span className="font-bold">Victor Crest</span>
              <span className="text-darkGray font-medium">26</span>
            </div>
            <div className="mt-1 text-sm">London</div>
            <div className="mt-5 h-[1px] w-full self-stretch bg-gray-300"></div>
            <div className="mt-[25px] grid grid-cols-3 justify-items-center self-stretch pb-6 pe-[26px] ps-[22px] sm:pe-[24px] sm:ps-[28px]">
              <div className="flex flex-col items-center">
                <div className="text-[18px] font-extrabold">80K</div>
                <div className="text-darkGray text-[10px] font-medium tracking-[1.2px]">
                  Followers
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-[18px] font-extrabold">803K</div>
                <div className="text-darkGray text-[10px] font-medium tracking-[1.2px]">
                  Likes
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-[18px] font-extrabold">1.4K</div>
                <div className="text-darkGray text-[10px] font-medium tracking-[1.2px]">
                  Photos
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
