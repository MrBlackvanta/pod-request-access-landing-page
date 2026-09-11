import PlatformLogos from "./platform-logos";
import RequestAccessForm from "./request-access-form";

export default function Hero() {
  return (
    <main className="md:bg-page mt-14 flex flex-col text-center md:mt-26 md:max-w-148 md:pt-22 md:text-left lg:max-w-184">
      <h1 className="text-display text-green md:text-display-lg uppercase md:max-w-132 lg:max-w-none">
        Publish your podcasts{" "}
        <span className="block text-white">everywhere.</span>
      </h1>
      <p className="text-lead text-copy md:text-lead-lg mt-4 md:mt-6 md:max-w-md">
        Upload your audio to pod with a single click. We&rsquo;ll then
        distribute your podcast to Spotify, Apple Podcasts, Google Podcasts,
        Pocket Casts and more!
      </p>
      <PlatformLogos />
      <RequestAccessForm />
    </main>
  );
}
