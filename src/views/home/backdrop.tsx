import desktopPhoto from "@/assets/image-host-desktop.webp";
import mobilePhoto from "@/assets/image-host-mobile.webp";
import tabletPhoto from "@/assets/image-host-tablet.webp";

export default function Backdrop() {
  return (
    <div className="relative col-start-1 row-start-1 row-end-4 md:row-end-3 lg:row-start-2">
      <picture className="absolute inset-0 opacity-10 md:left-1/2 md:-ml-19 md:opacity-100 lg:-ml-44">
        <source media="(min-width: 64rem)" srcSet={desktopPhoto.src} />
        <source media="(min-width: 48rem)" srcSet={tabletPhoto.src} />
        <img
          src={mobilePhoto.src}
          alt=""
          width={mobilePhoto.width}
          height={mobilePhoto.height}
          fetchPriority="high"
          className="size-full object-cover object-left"
        />
      </picture>
      <div className="text-green v-dot-grid absolute right-0 -bottom-13 hidden h-26 w-26 md:block lg:w-58" />
    </div>
  );
}
