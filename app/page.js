import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  subsets: ["latin"],
});


export default function Home() {
  return (
    <main className="">
      <section className="grid md:grid-cols-2 grid-cols-1 min-h-[60vh] bg-[#d2e823]">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className={`font-bold text-3xl ${poppins.className} text-[#254f1a]`}>
            That the best URL shortner for you
          </p>
          <p className="px-30 text-center text-[#254f1a]">
            We are the most straightforward and easy to use URL shortner in the world. Most of the URL shortners will track your or ask you to give your details to login. We understand your needs and we are here to provide you the best experience of URL shortening without any hassle.
          </p>
          <div className='flex gap-4 justify-start'>
            <Link href="/shorten"><button className='bg-[#254f1a] shadow-lg p-3 rounded-lg font-bold py-2 text-white cursor-pointer'>Try Now</button></Link>
            <Link href="https://github.com/Suding08"><button className='bg-[#254f1a] shadow-lg p-3 rounded-lg font-bold py-2 text-white cursor-pointer'>GitHub</button></Link>
          </div>
        </div>
        <div className="relative flex justify-center">
          <Image className="mix-blend-darken" width={600} height={400} alt="an Image of vector" src={"/vector.jpg"} />
        </div>
      </section>

      <div className="container text-black bg-[#2665d6] flex flex-col gap-4 mx-auto">
        <h2 className="font-bold md:text-5xl text-3xl text-center mb-14 text-[#d2e823] px-4">What We Offer</h2>
        <div className="justify-center flex flex-row items-center">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-200 rounded-full p-2" src="/icon-like.png" width={100} alt="" />
            <p className="font-bold text-center text-xl text-[#d2e823]">Easy</p>
            <p className="text-center text-white">BitLinks is easy and fast, enter the long link to get your shortened link</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-200 rounded-full p-2" src="/icon-url.png" width={100} alt="" />
            <p className="font-bold text-center text-xl text-[#d2e823]">Shortened</p>
            <p className="text-center text-white">Use any link, no matter what size, BitLinks always shortens</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-200 rounded-full p-2" src="/icon-secure.png" width={100} alt="" />
            <p className="font-bold text-center text-xl text-[#d2e823]">Secure</p>
            <p className="text-center text-white">It is fast and secure, our service has HTTPS protocol and data encryption</p>
          </div>
        </div>
        <div className="gap-5 justify-center flex flex-row items-center">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-200 rounded-full p-2" src="/icon-statistics.png" width={100} alt="" />
            <p className="font-bold text-center text-xl text-[#d2e823]">Statistics</p>
            <p className="text-center text-white">Check the number of clicks that your shortened URL received</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-200 rounded-full p-2" src="/icon-unique.png" width={100} alt="" />
            <p className="font-bold text-center text-xl text-[#d2e823]">Reliable</p>
            <p className="text-center text-white">All links that try to disseminate spam, viruses and malware are deleted</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-200 rounded-full p-2" src="/icon-responsive.png" width={100} alt="" />
            <p className="font-bold text-center text-xl text-[#d2e823]">Devices</p>
            <p className="text-center text-white">Compatible with smartphones, tablets and desktop</p>
          </div>
        </div>

      </div>
    </main>
  );
}
