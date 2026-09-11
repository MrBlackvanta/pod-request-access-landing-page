import { PodLogo } from "@/components/icons";
import { Hero } from "@/views/home";

export default function Home() {
  return (
    <div className="grid min-h-dvh grid-rows-[1fr_auto_1fr]">
      <div className="row-start-2 px-9 md:px-11">
        <div className="mx-auto w-full max-w-280">
          <header className="flex justify-center md:justify-start">
            <PodLogo />
            <span className="sr-only">pod</span>
          </header>
          <Hero />
        </div>
      </div>
    </div>
  );
}
