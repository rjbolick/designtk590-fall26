import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white px-6 py-24 dark:bg-black sm:items-start sm:px-16">
       <Image
        className="size-[250px] rounded-full object-cover"
        src="/IMG_9866.jpg"
        alt="Jonathan Walker"
        width={250}
        height={250}
        priority
       />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            YOOOO WE HERE!!!
            
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            this is the start of something cool jonathan, keep it rollin!
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Google
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-red px-5 transition-colors hover:border-transparent hover:bg-red/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://fromjonathan.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            personal site
          </a>
        </div>
      </main>
    </div>
  );
}
