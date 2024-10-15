import Image from "next/image"

export const Header = () => {
  return (
    <header className=" py-4 border-b border-white/15 md:border-none sticky top-0 z-50 ">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border rounded-lg border-white/15  md:py-0 md:px-5 max-w-2xl mx-auto relative ">
          <div className="hidden md:block absolute inset-0 backdrop-blur -z-10 "></div>
          <div>
            {/* To make the border of the Logo inline-flex to make it in center aligfned with Logo */}
            {/* <div className="border h-10 w-10 rounded-xl border-white/15 inline-flex justify-center items-center"> */}
            <Image src="/MetaPoise.png" alt="logo" width={100} height={100} />
            {/* </div> */}
          </div>
          <div className="">
            <nav className="flex gap-8   ">
              {/* <Image
                className="md:hidden"
                src="/MetaPoise.png"
                alt="logo"
                width={50}
                height={50}
              /> */}
              <a
                className="text-white/70 hover:text-white transition "
                href="#"
              >
                Home
              </a>
              <a
                className="text-white/70 hover:text-white hover:y-10 transition "
                href="https://www.instagram.com/metapoise_official/"
              >
                Instagram
              </a>
              <a
                className="text-white/70 hover:text-white transition "
                href="https://www.facebook.com/people/%F0%9D%99%BC%F0%9D%99%B4%F0%9D%9A%83%F0%9D%99%B0%F0%9D%99%BF%F0%9D%99%BE%F0%9D%99%B8%F0%9D%9A%82%F0%9D%99%B4/61564376692181/?mibextid=kFxxJD"
              >
                Facebook
              </a>
              <a
                className="text-white/70 hover:text-white transition "
                href="#"
              >
                Events
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center"></div>
        </div>
      </div>
    </header>
  )
}
