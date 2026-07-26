import { Star } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";

// Review data mapped by the unique reviewKey used in your JSX
const reviewData: Record<
  string,
  { rating: number; title: string; content: string; author: string }
> = {
  marwan: {
    rating: 5,
    title: "Amazing team for our startup",
    content:
      "They built our entire platform from scratch with modern React and Next.js. The performance is incredible and the code quality is top‑notch.",
    author: "Marwan El‑Haddad",
  },
  abd: {
    rating: 4,
    title: "Professional and fast",
    content:
      "We needed a complex dashboard with real‑time data. They delivered ahead of schedule. The UI is clean and responsive.",
    author: "Abdullah Al‑Mansoori",
  },
  maymay: {
    rating: 5,
    title: "Exceeded expectations",
    content:
      "The team's expertise in modern web development is outstanding. They used the latest tech stack and made our web app super fast and scalable.",
    author: "May Al‑Hassan",
  },
  brad: {
    rating: 4,
    title: "Great communication",
    content:
      "From design to deployment, they were transparent and efficient. Our web application now handles thousands of users smoothly.",
    author: "Bradley Cooper",
  },
  reyhaneh: {
    rating: 5,
    title: "Innovative solutions",
    content:
      "They brought our vision to life with creative solutions. The web app is not only functional but also a pleasure to use.",
    author: "Reyhaneh Ahmadi",
  },
  mahtab: {
    rating: 3,
    title: "Good but could be better",
    content:
      "Overall satisfied with the outcome, but there were some delays. However, the final product is solid and meets our needs.",
    author: "Mahtab Gholami",
  },
  diego: {
    rating: 5,
    title: "Top‑notch development",
    content:
      "They are true experts in modern web apps. They implemented complex features with ease and we saw a huge boost in engagement.",
    author: "Diego Martinez",
  },
  chris: {
    rating: 4,
    title: "Reliable and skilled",
    content:
      "We've worked with many agencies, but this team stands out. They delivered a robust web application that our clients love.",
    author: "Chris Johnson",
  },
};

// Helper component – now uses the reviewKey to populate data
const ReviewCard = ({
  reviewKey,
  className = "bg-white",
}: {
  reviewKey: string;
  className?: string;
}) => {
  const data = reviewData[reviewKey];
  if (!data) return null; // fallback

  const { rating, title, content, author } = data;

  return (
    <div
      className={`flex p-4 border shadow border-[#F3F4F6] rounded-3xl flex-col gap-2 ${className}`}
    >
      <div className="flex items-center gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star size={14} className="fill-amber-600 stroke-amber-600" key={i} />
        ))}
        {/* Optionally show empty stars if you want a 5‑star system – omitted for brevity */}
      </div>
      <p className="font-medium text-lg text-foreground">{title}</p>
      <p className="text-[16px] text-muted-foreground line-clamp-3">{content}</p>
      <p className="text-[16px] text-muted-foreground/40 mt-2">{author}</p>
    </div>
  );
};

export default function Reviews() {
  return (
    <section className="z-0 ml-15">
      <div className="my-container mb-10">
        <div className="flex flex-col items-center justify-center relative">
          {/* Header Section */}
          <h1 className="text-3xl font-bold bg-opacity-50 bg-linear-to-t from-neutral-400 to-neutral-900 dark:from-neutral-50 dark:to-neutral-400 bg-clip-text! text-transparent md:mt-10 tracking-tighter md:text-5xl lg:text-7xl">
            Reviews & Feedbacks About US
          </h1>

          <p className="max-w-11/12 mt-3 text-xs md:text-sm md:max-w-8/12 text-muted-foreground font-semibold text-center">
            See What People Think about our work and Performance
          </p>

          {/* Desktop Masonry Grid */}
          <div className="hidden lg:flex justify-between gap-5 mt-20">
            {/* Column 1 */}
            <div className="flex w-4/12 lg:flex-col gap-5">
              <ReviewCard
                reviewKey="marwan"
                className="w-auto bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-2xl"
              />
              <ReviewCard
                reviewKey="abd"
                className="ml-10 w-90.25! bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-2xl p-3"
              />
              <ReviewCard
                reviewKey="maymay"
                className="w-90.25! ml-16 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-2xl p-3"
              />
            </div>

            {/* Column 2 (Center) */}
            <div className="flex w-4/12 flex-col gap-5">
              <ReviewCard
                reviewKey="brad"
                className="w-116.5 -mt-7 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-2xl"
              />

              <div className="translate-x-8 -translate-y-7">
                <Image
                  loading="lazy"
                  className="size-90 scale-125 rounded-4xl"
                  src="/assets/images/reviews.webp"
                  alt="Planingo"
                  width={300}
                  height={300}
                />
              </div>

              <ReviewCard
                reviewKey="reyhaneh"
                className="bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-2xl"
              />
            </div>

            {/* Column 3 */}
            <div className="flex w-4/12 flex-col gap-5">
              <ReviewCard
                reviewKey="mahtab"
                className="w-77! bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-2xl ml-9 mt-28"
              />
              <ReviewCard
                reviewKey="diego"
                className="w-77! bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-2xl"
              />
            </div>
          </div>

          {/* Mobile/Tablet Carousel */}
          <Carousel opts={{ loop: true }} className="w-full block lg:hidden mt-20" dir="ltr">
            <CarouselContent>
              <CarouselItem className="overflow-visible! cursor-pointer md:basis-1/3! lg:basis-1/6!">
                <ReviewCard reviewKey="marwan" className="overflow-visible! bg-pastel-purple" />
              </CarouselItem>

              <CarouselItem className="cursor-pointer md:basis-1/3! lg:basis-1/6!">
                <ReviewCard reviewKey="abd" className="bg-pastel-green" />
              </CarouselItem>

              <CarouselItem>
                <ReviewCard reviewKey="maymay" />
              </CarouselItem>

              <CarouselItem>
                <ReviewCard reviewKey="reyhaneh" />
              </CarouselItem>

              <CarouselItem>
                <ReviewCard reviewKey="chris" />
              </CarouselItem>

              <CarouselItem>
                <ReviewCard reviewKey="brad" />
              </CarouselItem>

              <CarouselItem>
                <ReviewCard reviewKey="mahtab" />
              </CarouselItem>

              <CarouselItem>
                <ReviewCard reviewKey="diego" />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}