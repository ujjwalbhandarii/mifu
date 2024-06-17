import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function InfluncerForm() {
  return (
    <form className="flex flex-col gap-6 md:gap-7 mx-auto lg:w-[60%] my-10 md:my-20">
      <h2 className="text-base font-semibold">Apply Now</h2>

      <div>
        <InputHeading>Name</InputHeading>
        <Input placeholder="Your Name" type="text" />
      </div>

      <div>
        <InputHeading>Email</InputHeading>
        <Input placeholder="Your email" type="email" />
      </div>

      <div>
        <InputHeading>Phone Number</InputHeading>
        <Input placeholder="Your phone number" type="tel" />
      </div>

      <div>
        <InputHeading>Your Socials</InputHeading>
        <div className="flex flex-col gap-6">
          <div className="flex gap-3 items-center">
            <figure>
              <Image
                src="/images/instagram.png"
                alt="instagram logo"
                height={40}
                width={40}
                className="aspect-square"
              />
            </figure>
            <div className="w-full relative">
              <Input
                placeholder="Instagram Username"
                type="text"
                className="px-9"
              />
              <AtherateSymbol />
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <figure>
              <Image
                src="/images/tiktok.png"
                alt="instagram logo"
                height={40}
                width={40}
                className="aspect-square"
              />
            </figure>
            <div className="w-full relative">
              <Input
                placeholder="Tiktok Username"
                type="text"
                className="px-9"
              />
              <AtherateSymbol />
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <figure>
              <Image
                src="/images/twitter.png"
                alt="instagram logo"
                height={40}
                width={40}
                className="aspect-square"
              />
            </figure>
            <div className="w-full relative">
              <Input
                placeholder="Twitter Username"
                type="text"
                className="px-9"
              />
              <AtherateSymbol />
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <figure>
              <Image
                src="/images/youtube.png"
                alt="instagram logo"
                height={40}
                width={40}
                className="aspect-square"
              />
            </figure>
            <div className="w-full relative">
              <Input
                placeholder="Youtube Username"
                type="text"
                className="px-9"
              />
              <AtherateSymbol />
            </div>
          </div>
        </div>
      </div>

      <div>
        <InputHeading>
          Who recruited you to join the Breakaway team? (Please list name of
          Person if applicable)
        </InputHeading>
        <Input placeholder="Your answer" type="text" />
      </div>

      <div>
        <InputHeading>
          Please provide the promo code you would like to share with your
          friends!
        </InputHeading>
        <Input placeholder="Your answer" type="text" />
      </div>

      <div>
        <InputHeading>Are you a member of a Greek organization?</InputHeading>
        <Input placeholder="Your answer" type="text" />
      </div>

      <div>
        <InputHeading>
          Are you a current student? Which college / university do you attend?
        </InputHeading>
        <Input placeholder="Your answer" type="text" />
      </div>

      <div className="md:flex md:justify-end my-3">
        <Button
          className="bg-purple-700 w-full lg:w-fit hover:bg-purple-800"
          size="lg"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

function AtherateSymbol() {
  return (
    <span className="absolute top-0 w-10 h-full flex items-center justify-center text-base font-semibold">
      @
    </span>
  );
}

function InputHeading({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-normal pb-2">{children}</p>;
}
