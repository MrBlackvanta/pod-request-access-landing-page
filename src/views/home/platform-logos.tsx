import {
  ApplePodcastLogo,
  GooglePodcastsLogo,
  PocketCastsLogo,
  SpotifyLogo,
} from "@/components/icons";

export default function PlatformLogos() {
  return (
    <div className="text-partner mt-10 flex items-center justify-between gap-2 *:min-w-0 md:order-1 md:mt-16 md:justify-start md:gap-10">
      <SpotifyLogo className="h-auto w-14 md:w-24" />
      <ApplePodcastLogo className="h-auto w-11.25 md:w-19.5" />
      <GooglePodcastsLogo className="h-auto w-18.25 md:w-31.25" />
      <PocketCastsLogo className="h-auto w-19 md:w-32.25" />
    </div>
  );
}
