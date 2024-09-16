import Image from "next/image";
import { Icon } from "lucide-react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className=" text-center justify-center font-semibold text-9xl font-jura tracking-widest md:tracking-widest">Metapoise</h2>
        <p className="text-center justify-center mt-4 mx-auto">Where tech meets tradition. The Techno-Alumni Fest</p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          About Us
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/metapoise_official?igsh=MWFhYzF2aWhxcjI4cA=="
          target="_blank"
          rel="noopener noreferrer">
          <InstagramLogoIcon/>
          Socials
        </a>
      </footer>
    </div>
  );
}
