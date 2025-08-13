import Image from "next/image";
import Link from "next/link";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function DownloadSection() {
  return (
    <>
      {/*Mobile*/}
      <div className="md:hidden mt-20 bg-primary-80 p-4 pt-20 pb-20 wave">
        <div className="flex flex-col items-center">
          {/* Text Section */}
          <div className="flex-1 space-y-6 md:pl-15 pl-0">
            <p className="text-white text-center font-black text-2xl leading-tight">
              Streamline your waste
              <br /> management efforts with our
              <br /> powerful app
            </p>
            <p className="text-base text-white text-center">
              Get our mobile app on any device
              <br /> you use on the App Store or Google
              <br /> Playstore
            </p>

            <div className="flex gap-5 mt-15 ">
              <div className="flex bg-[#D6F3E5] border border-primary-50 rounded-[6px] px-2 py-2 space-x-1 items-center">
                <div className="relative w-6 h-6">
                  <Image src="/playstore.png" alt="" fill priority />
                </div>
                <p className="text-sm">Get on Playstore</p>
              </div>
              <div className="flex bg-[#D6F3E5] border border-primary-50 rounded-[6px] px-2 py-2 space-x-1 items-center">
                <div className="relative w-6 h-6">
                  <Image src="/apple.png" alt="" fill priority />
                </div>
                <p className="text-sm">Get on App Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block mt-48 bg-primary-80 p-4 md:pb-0 wave">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
          {/* Text Section */}
          <div className="flex-1 space-y-6 md:pl-15 pl-0">
            <p className="text-white text-center md:text-left font-black text-xl md:text-[33px] leading-tight">
              Streamline your waste management <br /> efforts with our powerful
              app
            </p>
            <p className="text-base text-white">
              Get our mobile app on any device you use on the <br /> App Store
              or Google Playstore
            </p>

            <div className="flex gap-7 mt-15">
              <div className="flex bg-[#D6F3E5] border border-primary-50 rounded-[6px] px-3 py-2 space-x-2 items-center">
                <div className="relative w-6 h-6">
                  <Image src="/playstore.png" alt="" fill priority />
                </div>
                <p className="text-base">Get on Playstore</p>
              </div>
              <div className="flex bg-[#D6F3E5] border border-primary-50 rounded-[6px] px-3 py-2 space-x-2 items-center">
                <div className="relative w-6 h-6">
                  <Image src="/apple.png" alt="" fill priority />
                </div>
                <p className="text-base">Get on App Store</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden md:flex flex-1 justify-end">
            <div className="relative w-[300px] md:w-[500px] h-[500px]">
              <Image
                src="/phone.webp"
                alt=""
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-24 flex flex-col gap-y-10 md:flex-row justify-center items-center md:max-w-5xl md:m-auto px-8 gap-0 md:gap-20">
        <p className="text-2xl text-center md:text-start md:text-[35px] font-black md:leading-snug">
          Take the first step
          <br className="md:hidden" /> towards a<br />{" "}
          <span className="bg-gradient-to-r from-[#2c8258] to-[#ffde52] text-transparent bg-clip-text">
            cleaner future.
          </span>
        </p>

        <Link
          href="/register"
          className="flex space-x-2 bg-primary-60 rounded-[10px] p-3 px-5 w-max hover:bg-primary-50 duration-700"
        >
          {" "}
          <p className="text-white font-bold">Get Started - for Free</p>{" "}
          <TbArrowNarrowRight className="text-white h-6 w-6 my-auto" />{" "}
        </Link>
      </div>

      <div className="bg-[#F3F3F3] mt-10 md:mt-24 flex flex-col md:flex-row justify-center items-center py-10 md:space-y-0 space-y-5 md:space-x-8 mb-10">
        <div className="flex ">
          <Link href="https://bitgifty.com/">
            <div className="relative h-[39px] md:h-[43px] w-[106px] md:w-[120px]">
              <Image src="/bitgift.png" alt="bitgifty" fill priority />
            </div>
          </Link>
          <Link href="https://lawma.gov.ng/">
            <div className="relative h-[39px] md:h-[43px] w-[130px] w-[141px]">
              <Image src="/lawma.png" alt="bitgifty" fill priority />
            </div>
          </Link>
        </div>
        <p className="font-black text- md:text-2xl text-grey-30">
          {" "}
          Be part of our Partners
        </p>
      </div>
    </>
  );
}
