import { PodLogo } from "@/components/icons";
import { Backdrop, Hero } from "@/views/home";

export default function Home() {
  return (
    <div className="grid min-h-dvh grid-rows-[1fr_auto_minmax(3.5rem,1fr)] overflow-clip md:grid-rows-[1fr_auto_minmax(2rem,1fr)]">
      <Backdrop />
      <div className="relative col-start-1 row-start-2 min-w-0 px-9 md:px-11">
        <div className="mx-auto w-full max-w-md md:max-w-280">
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
