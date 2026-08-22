import Image from "next/image";

const galleryItems = [
  {
    src: "/images/gallery/free-range-desi-chickens.jpg",
    alt: "Free-range desi chickens on a green farm",
    title: "Free-Range Desi Birds",
  },
  {
    src: "/images/gallery/day-old-chicks.jpg",
    alt: "Healthy day-old chicks in a clean brooder",
    title: "Healthy Day-Old Chicks",
  },
  {
    src: "/images/gallery/modern-poultry-shed.jpg",
    alt: "Clean poultry shed with organized feeders and drinkers",
    title: "Modern Farm Facilities",
  },
  {
    src: "/images/gallery/farmer-with-desi-flock.jpg",
    alt: "Poultry farmer inspecting a healthy desi chicken flock",
    title: "Farmer-Focused Support",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-brand-light px-6 py-24 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-brand-dark">Our Gallery</h2>
          <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
            A glimpse into the healthy birds, modern facilities, and hands-on support behind our poultry solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {galleryItems.map((item) => (
            <figure
              key={item.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 639px) calc(100vw - 3rem), (max-width: 1151px) calc(50vw - 2.25rem), 552px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/85 to-transparent px-6 pt-16 pb-6">
                <figcaption className="text-xl font-semibold text-white">
                  {item.title}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
