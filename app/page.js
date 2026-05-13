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
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className={`font-bold text-2xl ${poppins.className}`}>
          That the best URL shortner for you
          </p>
          <p className=" px-30 text-center">
            We are the most straightforward and easy to use URL shortner in the world. Most of the URL shortners will track your or ask you to give your details to login. We understand your needs and we are here to provide you the best experience of URL shortening without any hassle.
          </p>
          <div className='flex gap-4 justify-start'>
                <Link href="/generate"><button className='bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1 text-white'>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1 text-white'>GitHub</button></Link>
            </div>
        </div>
        <div className="flex justify-center relative">
          <Image className="mix-blend-darken" alt="an Image of vector" src={"/vector.jpg"} fill={true}/>
        </div>
      </section>
    </main>
  );
}
