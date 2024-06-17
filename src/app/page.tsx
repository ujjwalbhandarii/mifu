import Image from "next/image";
import InfluncerForm from "@/components/influncerForm";

export default function Home() {
  return (
    <main className="container">
      <nav className="flex items-center justify-center py-5 md:py-7">
        <figure>
          <Image
            src="/images/breakaway_logo.png"
            alt="mifu logo"
            height={300}
            width={300}
            quality={100}
            priority
            className="max-h-[2.5rem] md:max-h-[3rem]"
          />
        </figure>
        <span className="mx-2 md:mx-5 text-lg font-bold">X</span>
        <figure className="md:min-w-[10rem]">
          <Image
            src="/images/mifu_logo.png"
            alt="mifu logo"
            height={140}
            width={140}
            quality={100}
            priority
            className="h-[2rem] aspect-video md:aspect-auto md:w-auto md:h-auto"
          />
        </figure>
      </nav>
      <section className="flex items-center justify-center gap-3 flex-col text-center my-4 md:my-10 lg:max-w-[70%] mx-auto">
        <h1 className="text-2xl font-extrabold leading-tight tracking-wide md:mb-3 md:w-[40rem]">
          Become an Influencer For Breakaway x Mifu
        </h1>
        <p className="text-base font-medium">
          Whether you&apos;re the person with the most likes or followers on
          campus, or a hard-worker looking to build your network and gain
          marketing experience, we want to HEAR from you.
        </p>
        <p className="text-base font-medium">
          Becoming a part of the Breakaway Influencer and Ambassador team is
          pretty simple. Just apply by selecting your preferred market below.
          Complete your application and attach your Instagram handle for a
          chance to be considered!
        </p>
      </section>
      <InfluncerForm />
    </main>
  );
}
